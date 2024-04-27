import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/Paginas/About';
import Contact from './components/Paginas/Contact';
import Login from './components/Paginas/Login';
import Cart from './components/Paginas/Cart';
import NavegabilidadGIF from "./components/Gif/NavegabilidaGif";

function App() {

  return (
    <BrowserRouter>

      <Navbar />
      <NavegabilidadGIF />
      <Routes>

        <Route path="/" element={<ItemListContainer greeting={"¡Bienvenido a nuestra tienda Perroo!"} />} />
        <Route path="/category/:idCategory" element={<ItemListContainer greeting={"¡Bienvenido a nuestra tienda Perroo!"} />} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404: Not Found</div>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
