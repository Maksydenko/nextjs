import { Routes, Route } from "react-router-dom";

import ScrollTop from "./ScrollTop";

import PageNotFound from "@pages/PageNotFound";
import Home from "@pages/Home";

function MenuRoutes() {
  return (
    <Routes>
      {ScrollTop()}
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default MenuRoutes;
