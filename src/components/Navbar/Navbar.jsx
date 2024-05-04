import "./navbar.css"
import logo from "../../../public/img/logo.png";
import { VscMenu } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";
import CartWidget from "../CartContext/CartWidget";

function Navbar() {

    const { cartCount } = useCart()
    console.log("Cantidad de elementos en el carrito:", cartCount)
    return (
        <div className="Navbar">

            <nav className="Nav">

                <div className="LogoContainer">
                    <Link to={"/"}>
                        <img src={logo} className="logoMarca" alt="" />
                    </Link>
                </div>

                <ul className="NavUl">
                    <li className="NavLi"><Link to={"/"}>SHOP</Link></li>
                    <li className="NavLi"><Link to={"/About"}>ACERCA DE</Link></li>
                    <li className="NavLi"><Link to={"/contact"}>CONTACTO</Link></li>
                    <li className="NavLi"><Link to={"/login"}>INICIAR SESION</Link></li>
                </ul>

                <CartWidget/>

                <div className="Barra">
                    <button className="BarraHambur">
                        <a href="#" className="iconHambur">
                            <VscMenu size="25px" />
                        </a>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar