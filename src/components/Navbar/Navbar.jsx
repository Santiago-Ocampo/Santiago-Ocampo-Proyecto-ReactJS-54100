import "./navbar.css"
import logo from "../../assets/img/logo.png"
import { BsCartFill } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";

function Navbar() {
    return (
        <div className="Navbar">

            <nav className="Nav">

                <div className="LogoContainer">
                    <a href="#">
                        <img src={logo} className="logoMarca" alt="" />
                    </a>
                </div>

                <ul className="NavUl">
                    <li className="NavLi"><a href="#">SHOP</a></li>
                    <li className="NavLi"><a href="#">ACERCA DE</a></li>
                    <li className="NavLi"><a href="#">CONTACTO</a></li>
                    <li className="NavLi"><a href="#">INICIAR SESION</a></li>
                </ul>

                <div className="carrito">
                    <a href="#">
                        < BsCartFill size="25px" className="IconoCarrito" />
                        <span className="TextoCarrito">1</span>
                    </a>
                </div>

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