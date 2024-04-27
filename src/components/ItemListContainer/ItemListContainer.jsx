import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import ObtenerProducts from "../Resources/ObtenerProducts";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();
    useEffect(() => {
        ObtenerProducts
            .then((respuesta) => {
                const filteredProducts = idCategory ? respuesta.filter((producto) => producto.category === idCategory) : respuesta
                setProducts(filteredProducts)
            })
            .catch(error => console.error(error))
    }, [idCategory]) //para evitar que se vuelva a renderizar y no se forme un bucle infinito.

    return (
        <div className="container">
            <h2 className="mensaje">{greeting} </h2>
            <div className="item-list">
                <ItemList products={products} />
            </div>
        </div>
    );
}

export default ItemListContainer

// se debe encargar de consumir la api o una promesa que nos traiga el listado de productos
// esos hay que guardarlos en variables de estado y pasarselos por prop a Itemlist