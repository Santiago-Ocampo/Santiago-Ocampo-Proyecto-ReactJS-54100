import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import ObtenerProducts from "../Resources/ObtenerProducts";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { idProduct } = useParams()

    useEffect(() => {
        ObtenerProducts
            .then((respuesta) => {
                const selectedProduct = idProduct ? respuesta.find((product) => product.id === parseInt(idProduct)) : {}
                setProduct(selectedProduct)
            })
            .catch(error => console.error(error))
    }, [idProduct])

    return (
        <div className="item-detail-container">
            <div className="item-detail">
                {idProduct ? <ItemDetail product={product} /> : <p>No se ha seleccionado ningún producto</p>}
            </div>
        </div>
    )
}
export default ItemDetailContainer
