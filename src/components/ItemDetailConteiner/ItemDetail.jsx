import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { useCart } from "../CartContext/CartContext";
import ItemCount from "./ItemCount";



const ItemDetail = ({ product }) => {

    // Lógica para agregar el producto al carrito

    const { addToCart } = useCart()
    const [isAddedToCart, setIsAddedToCart] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [stock, setStock] = useState(product.stock)

    useEffect(() => {
        const initialStock = typeof product.stock === 'number' ? product.stock : 1
        console.log("Initial product stock:", initialStock)
        setStock(initialStock)
    }, [product.stock])


    const handleAddToCart = () => {
        console.log("Current stock:", stock)
        console.log("Adding quantity:", quantity)
        quantity <= stock
            ? (addToCart({ ...product, quantity }),
                setStock(prevStock => {
                    const newStock = prevStock - quantity
                    console.log("Updated stock after adding to cart:", newStock)
                    return newStock;
                }),
                setIsAddedToCart(true))
            : console.error("Trying to add more quantity than available in stock")
    }


    const handleQuantityChange = (newQuantity) => {
        console.log("Handling quantity change:", newQuantity)
        newQuantity <= product.stock
            ? setQuantity(newQuantity)
            : console.error("Trying to set quantity higher than available stock")
    }


    return (
        <div className="card-detail">
            <h2 className="titulo-detail">{product["product title"]}</h2>
            <div className="imagen-box-card-detail">
                <img className="imagen-card-detail" src={product["url-Image"]} alt={product["product title"]} />
            </div>

            <div className="Info-card-detail">
                <p className="descripcion-card-detail">{product["product description"]}</p>
                <p className="precio-card-detail">Valor: {product["product price"]}</p>
                <p className="stock-card-detail">Stock disponible: {stock} </p>
            </div>

            <div className="addToCart-button">
                {!isAddedToCart ? (
                    <>
                        <div className="item-count-container">
                            <ItemCount className="count-add-to-cart" initial={1} stock={stock} onQuantityChange={handleQuantityChange} />
                        </div>

                        <button className="btn-add-to-cart" onClick={handleAddToCart}> Agregar al carrito </button></>
                ) : (
                    <p>Añadido al carrito</p>
                )}
            </div>
        </div>
    );
}

export default ItemDetail