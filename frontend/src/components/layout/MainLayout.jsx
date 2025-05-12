import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
