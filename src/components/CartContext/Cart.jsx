import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from "./CartContext";
import "./Cart.css";

const Cart = () => {

    const { cart, removeFromCart, totalPrice } = useCart()
    console.log("Cart:", cart)
    console.log("Total Price:", totalPrice)

    return (
        <div className="Cart-container mt-4">

            <h2 className="Cart-titulo">Carrito de Compras</h2>

            {cart.length === 0 ? (
                <div className="Cart-return">
                    <p className="Cart-return-p">No hay ítems en el carrito.</p>
                    <Link to="/" className="btn-Cart" >Volver a la tienda</Link>
                </div>
            ) :

                (
                    <div className="Cart-body">

                        {cart.map((item) => (
                            <div key={item.id} className="card-Cart-body">
                                <h5 className="card-Cart-title">{item["product title"]}</h5>
                                <p className="card-Cart-text">Cantidad: {item.quantity}</p>
                                <p className="card-Cart-text">Precio: ${item["product price"] ? item["product price"].toFixed(2) : 'Precio no disponible'}</p>
                                <p className="card-Cart-text">Descripción: {item["product description"]}</p>
                                <button onClick={() => removeFromCart(item.id)} className="card-Cart-btn">Eliminar</button>
                            </div>
                        ))}


                        {typeof totalPrice === 'number' && !isNaN(totalPrice) && (
                            <div className="Cart-total">
                                <p className="Cart-total-text">Total de compra: ${totalPrice.toFixed(2)}</p>
                            </div>
                        )}

                        <div className="Cart-return">
                            <Link to="/"  className="btn-Cart"> Volver a la tienda </Link>
                        </div>

                    </div>
                )}
        </div>
    );
};


export default Cart