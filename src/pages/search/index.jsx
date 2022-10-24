import React from "react";
import { useEffect, useState } from "react";
import RenderCard from "../../components/RenderCard";
import CustomPagination from "../../components/CustomPagination";
import { SearchMult } from "../../lib/apiTmdb";
import { SearchIcon } from "@/components/Layout/icons/SearchIcon";
import { useDebounce } from "hooks/useDebounce";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const debouncedQuery = useDebounce(search, 500);

  useEffect(() => {
    const abortController = new AbortController();
    if (debouncedQuery) {
      SearchMult(
        { key_word: debouncedQuery, page: page },
        { signal: abortController.signal }
      ).then((res) => {
        setResults(res.results);
        setTotalPages(res.total_pages);
      });
    } else {
      setResults([]);
      setTotalPages();
    }

    return () => {
      abortController.abort();
    };
  }, [debouncedQuery, page]);

  return (
    <div className=" pt-28 px-8 sm:px-2 min-h-screen flex flex-col items-center gap-8">
      <div className="relative flex items-center w-full pl-3 h-14 rounded-md bg-neutral-800/50 shadow-lg ">
        <SearchIcon />
        <input
          className="absolute te top-0 left-0 pl-12 right-0 h-full  bg-transparent focus:border-2 border-neutral-500  border-0 outline-none"
          type="text"
          placeholder="O que deseja assistir ?"
          value={search}
          onChange={handleChange}
        />
        <button className="bg-blue-300" type="submit"></button>
      </div>
      {results.length > 0 && <RenderCard list={results} />}
      {totalPages > 1 && (
        <CustomPagination setPage={setPage} page={page} maxPage={totalPages} />
      )}
    </div>
  );
};

export default SearchPage;
