import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/Paginas/About';
import Login from './components/Paginas/Login';
import Cart from "./components/CartContext/Cart";
import NavegabilidadGIF from "./components/Gif/NavegabilidaGif";
import { CartProvider } from "./components/CartContext/CartContext";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <BrowserRouter>
      <CartProvider>

        <Navbar />
        <NavegabilidadGIF />


        <Routes>

          <Route path="/" element={<ItemListContainer greeting={"¡Bienvenido a nuestra tienda Perroo!"} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer greeting={"¡Bienvenido a nuestra tienda Perroo!"} />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<div>404: Not Found</div>} />

        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
