import Footer from "./Footer";
import NavBar from "./NavBar";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        style={{
          background:
            "linear-gradient(145deg, rgba(0,0,0,1) 0%, rgba(41,15,62,1) 57%, rgba(16,5,27,1) 100%);",
        }}
        className="fixed -z-10 w-full h-full "
      ></div>
      <NavBar />
      <main className="w-full   flex-1">{children}</main>
      <Footer />
    </div>
  );
};
