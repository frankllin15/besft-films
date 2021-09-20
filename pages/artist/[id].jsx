import React, { useState, useEffect, useRef } from "react";
import RenderCard from "../../components/RenderCard";
import CustomSelect from "../../components/CustomSelect";
import CustomPagination from "../../components/CustomPagination";
import { NextSeo } from "next-seo";
import { gql } from "@apollo/client";
import { client } from "../../lib/graphql/client";

export default function Artist({ data }) {
  const ref = useRef(null);
  const [type, setType] = useState("movie");
  const [page, setPage] = useState(1);
  const [artWorks, setArtWorks] = useState([]);

  const selectOptions = [
    { label: "Filmes", value: "movie" },
    { label: "Séries", value: "tv" },
  ];

  useEffect(() => {
    (async () => {
      const { data: query } = await client.query({
        query: gql`
                  query{
                      
                      artWorks(id: ${data.id}, media_type: "${type}", page: ${page}) {
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

      setArtWorks((await query).artWorks);
    })();
  }, [page, type]);

  useEffect(() => {
    const element = document.querySelector("#bio");
    const toggleOverflow = document.querySelector("#toggleOverflow");

    if (element.scrollHeight > element.clientHeight) {
      toggleOverflow.style.display = "inline";
    } else {
      toggleOverflow.style.display = "none";
    }
  }, []);

  function handleChangeSelect(e) {
    setType(e);
    setPage(1);
  }

  function hendleOverFlow() {
    const element = document.querySelector("#bio");
    const toggleOverflow = document.querySelector("#toggleOverflow");

    if (element.scrollHeight > element.clientHeight) {
      toggleOverflow.innerHTML = "Mostrar menos";
      element.classList.remove("max-h-20");
    } else {
      toggleOverflow.innerHTML = "Mostrar mais";
      element.classList.add("max-h-20");
    }
  }

  return (
    <div className="flex  mt-6  flex-col">
      <NextSeo
        additionalMetaTags={[{ name: "robots", content: "noindex,nofollow" }]}
        title={data.name}
        description={`Filmes e series relacionados a ${data.name}`}
      />
      <div className="flex flex-row  md:flex-col p-5 self-start ">
        <div className="h-full sticky md:static top-24 flex-1  min-w-200px">
          <div className="rounded-lg  w-200 min-w-200px h-300 relative ml-auto mr-auto shadow-lg">
            <img
              alt={data.name}
              layout="fill"
              className="rounded-lg  "
              src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            />
          </div>
        </div>
        <article className="pl-5 mt-4">
          <h1 className="text-2xl text-white">{data.name}</h1>
          <h3>{data.known_for_department}</h3>
          <h3>Naturalidade: {data.place_of_birth}</h3>
          <h3>Nascimento: {data.birthday}</h3>
          {data.biography && <h3 className="mt-4">Bio:</h3>}
          <p
            id="bio"
            className="max-h-20  overflow-hidden"
            onLoad={(e) => console.log("Event: " + e)}
          >
            {data.biography}
          </p>
          <span
            className="cursor-pointer mt-4 text-white"
            onClick={hendleOverFlow}
            id="toggleOverflow"
          >
            Mstrar mais
          </span>
        </article>
      </div>
      <div ref={ref} className="flex flex-col items-center pt-4">
        <CustomSelect
          className="self-start ml-5"
          placeHolder="Categoria"
          name="type"
          onchange={(e) => handleChangeSelect(e.value)}
          label=""
          options={selectOptions}
        />
        {artWorks.results && (
          <RenderCard list={artWorks.results} media_type="movie" />
        )}
        <CustomPagination
          maxPage={artWorks.total_pages}
          page={page}
          setPage={setPage}
          scrollTo={ref}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;

  const { data: props } = await client.query({
    query: gql`
          query{
    
            data: peaple(id: ${id}) {
                    id
                    name
                    profile_path
                    known_for_department
                    place_of_birth
                    birthday
                    biography
                }
        }
        `,
  });

  return {
    props,
  };
}
