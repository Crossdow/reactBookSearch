import React from 'react';
import {Routes, Route} from "react-router-dom";
import SearchScreen from "../pages/SearchScreen/SearchScreen";
import BookScreen from "../pages/BookScreen/BookScreen";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<SearchScreen />} />
      <Route path={"/book/:id"} element={<BookScreen />} />
    </Routes>
  );
};

export default AppRoutes;