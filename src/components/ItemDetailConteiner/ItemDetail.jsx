import "./ItemDetailContainer.css";
import { useState } from "react";
import { useCart } from "../CartContext/CartContext";


const ItemDetail = ({ product }) => {

    // Lógica para agregar el producto al carrito

    const {addToCart}= useCart()
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    const handleAddToCart = () => {
        addToCart(product)
        setIsAddedToCart(true);
    };


    return (
        <div className="card-detail">
            <h2 className="titulo-detail">{product.name}</h2>
            <div className="imagen-box-card-detail">
                <img className="imagen-card-detail" src={product.image} />
            </div>

            <div className="Info-card-detail">
                <p className="descripcion-card-detail">{product.description}</p>
                <p className="precio-card-detail">Valor:{product.price}</p>
            </div>

            <div className="addToCart-button">
                <button className="addToCart" onClick={handleAddToCart} disabled={isAddedToCart}>
                    {isAddedToCart ? 'Añadido al carrito' : 'Agregar al carrito'}
                </button>
            </div>


        </div>
    )
}

export default ItemDetail