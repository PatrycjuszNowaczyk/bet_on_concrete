import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import ShopCategory from "./pages/Shop/ShopCategory/ShopCategory";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop">
        <Route index element={<Shop />} />
        <Route path=":categoryId" element={<ShopCategory />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
