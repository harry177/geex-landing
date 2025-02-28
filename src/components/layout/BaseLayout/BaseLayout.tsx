import { Outlet } from "react-router-dom";
import { Header } from "../header/Header/Header";
import { Footer } from "../footer/Footer/Footer";

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
