// prettier-ignore
import { React, Routes, Route, Menu, Footer, Homepage, About, Shop, ShopCategory, Contact, O_404 } from './appImports.js';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop">
          <Route index element={<Shop />} />
          <Route path=":categoryId" element={<ShopCategory />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<O_404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
