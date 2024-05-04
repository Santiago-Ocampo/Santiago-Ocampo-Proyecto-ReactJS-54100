import React from 'react'
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { BsCartFill } from "react-icons/bs";


const CartWidget = () => {
    const { cartCount } = useCart()

    return (
        <div className="carrito">
            <Link to={"/Cart"}>
                < BsCartFill size="25px" className="IconoCarrito" />
                <span className="TextoCarrito">{cartCount}</span>
            </Link>
        </div>
    )
}

export default CartWidget