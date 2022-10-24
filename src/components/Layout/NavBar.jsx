import { Button } from "./common/Button";
import { MenuIcon } from "./icons/MenuIcon";
import React, { useState, useEffect } from "react";
import { Link } from "./common/Link";
import { SearchIcon } from "./icons/SearchIcon";
import { SideDrawer } from "./SideDrawer";
export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  function toggleDrawer() {
    setOpen(!open);
  }

  const handleScroll = () => {
    if (window.scrollY >= 66) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    window.addEventListener("scroll", handleScroll, { signal: signal });

    return () => {
      abortController.abort();
    };
  });

  return (
    <div
      style={{
        background: hasScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
      }}
      className="fixed z-30 w-full top-0 grid grid-cols-[1fr_3fr_1fr] place-items-center h-[5rem] transition-colors duration-400  px-8 md:px-2 sm:px-1"
    >
      <div className="flex">
        <Button onClick={toggleDrawer}>
          <MenuIcon />
        </Button>
        <Link className="md:hidden text-neutral-400 font-bold" to="/movie">
          Filmes
        </Link>
        <Link className="md:hidden text-neutral-400 font-bold" to="/tv">
          Séries
        </Link>
      </div>
      <Link
        className="text-white font-underground text-4xl"
        to="/"
        font="UndergroundNF"
      >
        BestFilms
      </Link>
      <div className="flex">
        <Link to="/search">
          <SearchIcon />
        </Link>
        <SideDrawer open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
