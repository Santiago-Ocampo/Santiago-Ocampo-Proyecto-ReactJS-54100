import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from "./CartContext";

const Cart = () => {

    const { cart, removeFromCart, totalPrice } = useCart()


    console.log("Cart:", cart)
    console.log("Total Price:", totalPrice)

    
    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <div>
                    <p>No hay ítems en el carrito.</p>
                    <Link to="/">Volver a la tienda</Link>
                </div>
            ) :
                (
                    <div>
                        {cart.map((item) => (
                            <div key={item.id}>

                                <p>{item.name} - Cantidad: {item.quantity} - Precio: {item.price} - Descripción: {item.description} </p>
                                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>

                            </div>
                        ))}

                        <p>Total de compra: ${totalPrice.toFixed(2)}</p>

                        <Link to="/"> Volver a la tienda </Link>

                    </div>
                )}
        </div>
    );
};


export default Cart