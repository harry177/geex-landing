import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/header/Header/Header";
import { Footer } from "@/components/layout/footer/Footer/Footer";

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
