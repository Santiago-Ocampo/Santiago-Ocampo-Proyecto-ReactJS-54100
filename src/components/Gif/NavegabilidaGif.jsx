import gifImage from "../../../public/img/Gif.gif"
import "./NavegabilidadGif.css"
import { useLocation } from "react-router-dom";

const NavegabilidadGIF = () => {
  const location = useLocation();
  const isItemDetailPage = location.pathname.includes("/detail")
  if (isItemDetailPage) {
    return null;
  }

  return (

    <div className="body-gif">
      <div className="container-gif">
      <h2 className="container-gif-texto">¡Explora la Navegabilidad!</h2>
      <img className="container-gif-imagen" src={gifImage} alt="Navegabilidad" />
    </div>
    </div>
    
  );
};

export default NavegabilidadGIF;