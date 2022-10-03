import { useRouter } from "next/router";
import { getReleaseMovies } from "../../lib/apiTmdb";
import RenderCard from "../../components/RenderCard";
import CustomPagination from "../../components/CustomPagination";
import { NextSeo } from "next-seo";
import { gql } from "@apollo/client";
import CircularProgress from "@material-ui/core/CircularProgress";
import { client } from "../../lib/graphql/client";

export default function release({ data }) {
  const Router = useRouter();

  const { isFallback } = Router;

  function handlePagination(e) {
    Router.push(`${e}`);
  }

  if (isFallback)
    return (
      <div className="flex items-center w-full h-screen justify-center">
        <CircularProgress />
      </div>
    );

  return (
    <div className="flex flex-col  items-center">
      <NextSeo
        title="Filmes lançados Recentemente"
        description="Os mais novos lançamentos de filmes disponiveis em HD"
      />
      <h1 className="text-2xl text-white text-center">Lançamentos</h1>
      {data && (
        <>
          <RenderCard list={data.results} media_type="movie" />
          <CustomPagination
            page={data.page}
            setPage={handlePagination}
            maxPage={data.total_pages}
          />
        </>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const { total_pages } = await getReleaseMovies(1);

  // const paths = Array(total_pages)
  //   .fill(0)
  //   .map((e, id) => {
  //     return {
  //       params: {
  //         page: `${id + 1}`,
  //       },
  //     };
  //   });

  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data: props } = await client.query({
    query: gql`
          query{
    
            data: releaseMovies(page: ${params.page}) {
                results {
                    id
                    name
                    poster_path
                    media_type
                    vote_average
                    }
                    total_pages
              }
        }
        `,
  });

  return {
    props,
    revalidate: 60 * 60 * 24 * 7,
  };
}
