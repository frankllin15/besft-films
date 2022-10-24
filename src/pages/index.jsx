import styled from "styled-components";
import MultiCarousel from "../components/MultiCarousel";
import { getMultipleMediaById } from "../lib/apiTmdb";
import { Title } from "../components/styles";
import CookiePermition from "../components/CookiePermition";
import { useEffect } from "react";
import { useState } from "react";
import { NextSeo } from "next-seo";
import { gql } from "@apollo/client";
import { client } from "../lib/graphql/client";

const MainContainer = styled.div`
  padding: 0 0rem 0;
  padding-top: 30px;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export default function Home({ trendingTv, trendingMovie }) {
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    (async () => {
      const watched = JSON.parse(localStorage.getItem("medias_watched"));

      if (watched?.length > 0) {
        try {
          const data = getMultipleMediaById(watched);

          setWatched(await data);
        } catch (e) {
          console.error({ error: e });
        }
      }
    })();
  }, []);

  return (
    <>
      <MainContainer>
        <NextSeo
          title="Best Films"
          description="Os melhores filmes e series online"
          additionalMetaTags={[{ name: "robots", content: "index,follow" }]}
        />
        <div className="flex flex-col gap-8 pt-28">
          {watched.length > 0 && (
            <>
              <Title>Vistos recentemente</Title>

              <MultiCarousel autoPlay={false} key={0} data={watched} />
            </>
          )}
          <MultiCarousel
            title="Séries em Alta"
            autoPlay={false}
            key={1}
            data={trendingTv}
          />

          <MultiCarousel
            title="Filmes em alta"
            autoPlay={false}
            key={2}
            data={trendingMovie}
          />
        </div>
      </MainContainer>

      <CookiePermition />
    </>
  );
}

export async function getStaticProps() {
  const quey = await client.query({
    query: gql`
      query {
        trendingMovie: trendingMedia(media_type: "movie") {
          id
          name
          poster_path
          media_type
          vote_average
        }
        trendingTv: trendingMedia(media_type: "tv") {
          id
          name
          poster_path
          media_type
          vote_average
        }
      }
    `,
  });
  const props = quey?.data || {};
  return {
    props,
    revalidate: 60 * 60 * 24,
  };
}
