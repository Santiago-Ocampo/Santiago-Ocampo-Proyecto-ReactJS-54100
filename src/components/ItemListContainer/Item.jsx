import { Link } from "react-router-dom";
import "./ItemListContainer.css"
//recibe por prop cada producto y devuelve por medio de una card esos datos
const  Item = ({ product }) => {
    return (
        <div key={product.id} className="card">
            <div className="imagen-box-card">
                <img className="imagen-card" src={product.image} alt={product.name} />
            </div>
            <div className="Info-card">
                <h2 className="titulo-card">{product.name}</h2>
                <p className="descripcion-card">{product.descripcion}</p>
                <Link className="details-text" to={`/detail/${product.id}`}>Detalles</Link>
            </div>

        </div>
    );
};

export default Item

//recibe por prop cada producto y devuelve por medio de una card esos datos
