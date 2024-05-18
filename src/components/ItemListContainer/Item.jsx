import { Link } from "react-router-dom";
import "./ItemListContainer.css"
//recibe por prop cada producto y devuelve por medio de una card esos datos
const Item = ({ product }) => {
    return (
        <div className="card">
            <div className="imagen-box-card">
                <img className="imagen-card" src={product["url-Image"]} alt={product["product title"]} />
            </div>
            <div className="Info-card">
                <h2 className="titulo-card">{product["product title"]}</h2>
                <p className="descripcion-card">Descripcion: {product["product description"]}</p>
                <p className="precio-card"> Precio: {product["product price"]}</p>
                <Link className="details-text" to={`/detail/${product.id}`}>Detalles</Link>
            </div>
        </div>
    );
};
export default Item

//recibe por prop cada producto y devuelve por medio de una card esos datos
