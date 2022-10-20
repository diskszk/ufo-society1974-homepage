import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AlbumListPage, AlbumDetailPage, UndefinedPage } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AlbumListPage />} />
        <Route path={`/detail/:id`} element={<AlbumDetailPage />} />
        <Route element={<UndefinedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
