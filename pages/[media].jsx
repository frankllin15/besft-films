import React from "react";
import styled from "styled-components";
import { getMediaByGenre } from "../lib/apiTmdb";
import RenderCard from "../components/RenderCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import CustomPagination from "../components/CustomPagination";
import CustomSelect from "../components/CustomSelect";
import { Title } from "../components/styles";
import { NextSeo } from "next-seo";

const Container = styled.div`
  padding: 0 0px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: 1rem;
`;

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 1em 0 1em;
`;

export default function Genre({ genre }) {
  const router = useRouter();
  const { media } = router.query;
  const [data, setdata] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    genre: 35,
    order: "desc",
  });

  const handleChange = (e, label) => {
    if (label === "genre") setPage(1);

    let aux = filter;
    aux[label] = e.value;
    setFilter({ ...aux });
  };

  useEffect(() => {
    (async () => {
      setdata(await getMediaByGenre(media, page, filter));
    })();
  }, [page, filter]);

  const releaseOptions = [
    { label: "Todos", value: false },
    { label: "2020", value: 2020 },
    { label: "2019", value: 2019 },
    { label: "2017", value: 2017 },
    { label: "2016", value: 2016 },
    { label: "2015", value: 2015 },
    { label: "2014", value: 2014 },
  ];
  return (
    <Container>
      <NextSeo
        title={`${media === "movie" ? "Filmes" : "Séries"} Online HD`}
        description={
          media === "movie" ? "Os melhores filmes HD" : "As melhores Séries HD"
        }
        additionalMetaTags={[{ name: "robots", content: "index, follow" }]}
      />

      {data.results ? (
        <>
          <Title>{media == "tv" ? "Series" : "Filmes"}</Title>
          <FilterContainer>
            <CustomSelect
              options={genre}
              name="genre"
              label="Genero"
              onchange={handleChange}
            />
            <CustomSelect
              options={releaseOptions}
              name={
                media === "tv" ? "first_air_date_year" : "primary_release_year"
              }
              label="Lançamento"
              onchange={handleChange}
            />
          </FilterContainer>
          <RenderCard list={data.results} media_type={media} />
          <CustomPagination
            page={page}
            maxPage={data.total_pages}
            setPage={setPage}
          />
        </>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
}

export async function getServerSideProps(ctx) {
  const { media } = ctx.query;

  const staticGenres = {
    movie: [
      {
        value: 28,
        label: "Ação",
      },
      {
        value: 12,
        label: "Aventura",
      },
      {
        value: 16,
        label: "Animação",
      },
      {
        value: 35,
        label: "Comédia",
      },
      {
        value: 80,
        label: "Crime",
      },
      {
        value: 99,
        label: "Documentário",
      },
      {
        value: 18,
        label: "Drama",
      },
      {
        value: 10751,
        label: "Família",
      },
      {
        value: 14,
        label: "Fantasia",
      },
      {
        value: 36,
        label: "História",
      },
      {
        value: 27,
        label: "Terror",
      },
      {
        value: 10402,
        label: "Música",
      },
      {
        value: 9648,
        label: "Mistério",
      },
      {
        value: 10749,
        label: "Romance",
      },
      {
        value: 878,
        label: "Ficção científica",
      },
      {
        value: 10770,
        label: "Cinema TV",
      },
      {
        value: 53,
        label: "Thriller",
      },
      {
        value: 10752,
        label: "Guerra",
      },
      {
        value: 37,
        label: "Faroeste",
      },
    ],
    tv: [
      {
        value: 10759,
        label: "Action & Adventure",
      },
      {
        value: 16,
        label: "Animação",
      },
      {
        value: 35,
        label: "Comédia",
      },
      {
        value: 80,
        label: "Crime",
      },
      {
        value: 99,
        label: "Documentário",
      },
      {
        value: 18,
        label: "Drama",
      },
      {
        value: 10751,
        label: "Família",
      },
      {
        value: 10762,
        label: "Kids",
      },
      {
        value: 9648,
        label: "Mistério",
      },
      {
        value: 10763,
        label: "News",
      },
      {
        value: 10764,
        label: "Reality",
      },
      {
        value: 10765,
        label: "Sci-Fi & Fantasy",
      },
      {
        value: 10766,
        label: "Soap",
      },
      {
        value: 10767,
        label: "Talk",
      },
      {
        value: 10768,
        label: "War & Politics",
      },
      {
        value: 37,
        label: "Faroeste",
      },
    ],
  };

  const genres = staticGenres[`${media}`];

  if (genres)
    return {
      props: {
        genre: genres,
      },
    };
  else
    return {
      props: {},
    };
}
