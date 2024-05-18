import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {


    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // Esta funcion recibe el carrito actualizado y obtiene el total
    const updateTotalPrice = (updatedCart) => {
        setTotalPrice(updatedCart.reduce((total, item) => total + (item["product price"] * item.quantity), 0))
    }

    const addToCart = (product) => {

        console.log("Adding to cart:", product)
        const existingProductIndex = cart.findIndex(item => item.id === product.id)
        const updatedCart = [...cart]

        // Si el producto ya existe en el carrito, incrementa su cantidad, de lo contrario, agrégalo al carrito con cantidad 1
        existingProductIndex !== -1
            ? updatedCart[existingProductIndex].quantity += product.quantity
            : updatedCart.push({ ...product })

        // Actualizar el estado del carrito y el contador
        setCart(updatedCart);
        setCartCount(prevCount => prevCount + product.quantity)

        // Actualiza el precio total
        updateTotalPrice(updatedCart);
    };

    const removeFromCart = (productId) => {

        const productToRemove = cart.find((item) => item.id === productId)
        if (!productToRemove) return

        const updatedCart = cart.filter((item) => item.id !== productId)

        const newTotalPrice = updatedCart.reduce((total, item) => total + (item["product price"] * item.quantity), 0)

        setCart(updatedCart)
        setCartCount((prevCount) => prevCount - productToRemove.quantity)
        setTotalPrice(newTotalPrice, updatedCart)
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, cartCount, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};