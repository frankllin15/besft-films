import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import ToogleButtomMenu from "./ToogleNavButtom";
import buttonMenuStyles from "../styles/ButtonMenu.module.css";
import navBarStyles from "../styles/NavBar.module.css";

const CustomLink = ({ href, children, onClick }) => {
  return (
    <li onClick={onClick} className="mobile:mt-11">
      <Link href={href}>
        <a className="text-gray-300 font-semibold text-lg mobile:text-2xl hover:text-gray-100">
          {children}
        </a>
      </Link>
    </li>
  );
};

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;

      if (width > 720) {
        const navBar = document.getElementsByClassName(navBarStyles.navbar)[0];
        const buttom = document.getElementsByClassName(
          buttonMenuStyles.nav_icon
        )[0];
        setOpen(false);
        console.log(width);
        navBar.classList.remove(navBarStyles.open);
        buttom.classList.remove(buttonMenuStyles.open);
      }
    });
  }, []);

  const handleTootleClick = () => {
    const navBar = document.getElementsByClassName(navBarStyles.navbar)[0];
    const buttom = document.getElementsByClassName(
      buttonMenuStyles.nav_icon
    )[0];
    if (open) {
      navBar.classList.remove(navBarStyles.open);
      buttom.classList.remove(buttonMenuStyles.open);
    } else {
      navBar.classList.add(navBarStyles.open);
      buttom.classList.add(buttonMenuStyles.open);
    }

    setOpen(!open);
  };

  return (
    <header
      className={
        navBarStyles.header +
        " flex flex-row justify-around mobile:pl-1 mobile:pr-1 pl-7 pr-7 items-center fixed top-0 h-16 w-screen shadow-md  bg-gray- z-2000"
      }
    >
      <ToogleButtomMenu handleClick={handleTootleClick} />
      <a href="/" className="min-w-100px">
        <img
          width="100px"
          src="https://fontmeme.com/permalink/210609/2be61abb18a6a45c288b615ff23704f6.png"
          alt="netflix-font"
          border="0"
        />
      </a>

      <nav
        className={
          navBarStyles.navbar +
          " mobile:absolute top-0 left-0 mobile:h-0 mobile:w-screen w-full  mobile:bg-gray-900  z-50"
        }
      >
        <ul className="flex w-full flex-row justify-around   mobile:flex-col mobile:items-center">
          <CustomLink
            onClick={() => {
              if (open) handleTootleClick();
            }}
            href="/movie"
          >
            Filmes
          </CustomLink>
          <CustomLink
            onClick={() => {
              if (open) handleTootleClick();
            }}
            href="/tv"
          >
            Series
          </CustomLink>
          <CustomLink
            onClick={() => {
              if (open) handleTootleClick();
            }}
            href="/movie/top-rated/1"
          >
            Top IMDB
          </CustomLink>
          <CustomLink
            onClick={() => {
              if (open) handleTootleClick();
            }}
            href="/release/1"
          >
            Lançamentos
          </CustomLink>
        </ul>
      </nav>

      <SearchBar />
    </header>
  );
}
