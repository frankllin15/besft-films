import { Link } from "./common/Link";
import { CloseIcon } from "./icons/CloseIcon";

export const SideDrawer = ({ open, setOpen }) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70  transition-all duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 left-0 md:w-full z-[3000] w-2/6 h-full  -translate-x-40 bg-zinc-900 transition-all duration-300 shadow-2xl pl-8 pt-4 ${
          open && "-translate-x-0"
        }`}
      >
        <div className="flex justify-start">
          <button
            onClick={() => setOpen(false)}
            className="p-4 focus:outline-none"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col items-start">
          <Link className="text-neutral-400  font-bold" to="/">
            Início
          </Link>
          <Link to="/tv" className="text-neutral-400 font-bold">
            Séries
          </Link>
          <Link to="/movie" className="text-neutral-400 font-bolb">
            Filmes
          </Link>
          <Link to="/movie/top-rated/1" className="text-neutral-400 font-bolb">
            Top IMDB
          </Link>
          <Link to="/release/1" className="text-neutral-400 font-bolb">
            Lançamentos
          </Link>
          <Link to="/config" className="text-neutral-400 font-bolb">
            Configurações
          </Link>
        </div>
      </div>
    </div>
  );
};
