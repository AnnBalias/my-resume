import React, { useState } from "react";
import AnnBalias from "../components/AnnBalias/AnnBalias";
import Navigation from "../components/Navigation/Navigation";
import MobileHeader from "../components/MobileHeader/MobileHeader";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";
import NotFound from "../pages/NotFound/NotFound";
import "./MainLayout.css";

const MainLayout = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="main-layout">
      {/* Мобільний хедер - показується тільки на мобільних пристроях */}
      <div className="mobile-header-container">
        <MobileHeader currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>

      {/* Десктопна версія - показується тільки на великих екранах */}
      <aside className="sidebar">
        <AnnBalias />
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      </aside>

      <main className="main-content">{renderPage()}</main>
    </div>
  );
};

export default MainLayout;
