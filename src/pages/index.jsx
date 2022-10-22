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
  padding: 0 2rem 0;
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
          console.log({ error: e });
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
        {watched.length > 0 && (
          <>
            <Title>Vistos recentemente</Title>

            <MultiCarousel autoPlay={false} key={0} data={watched} />
          </>
        )}

        <Title>Series em Alta</Title>
        <MultiCarousel autoPlay={false} key={1} data={trendingTv} />

        <Title>Filmes em Alta</Title>
        <MultiCarousel autoPlay={false} key={2} data={trendingMovie} />
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
