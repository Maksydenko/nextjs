import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home";

function MenuRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default MenuRoutes;
