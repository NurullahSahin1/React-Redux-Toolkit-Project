import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./container/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import CardPage from "./pages/CardPage";
import Search from "./pages/Search";

const App = () => {
  return (
    <BrowserRouter>
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/CardPage" element={<CardPage />} />
          <Route path="/products/:search" element={<Search />} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
};

export default App;
