import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {


    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {

        const existingProductIndex = cart.findIndex(item => item.id === product.id)
        const updatedCart = [...cart]

        // Si el producto ya existe en el carrito, incrementa su cantidad, de lo contrario, agrégalo al carrito con cantidad 1
        existingProductIndex !== -1
            ? updatedCart[existingProductIndex].quantity += 1
            : updatedCart.push({ ...product, quantity: 1 })

        // Actualizar el estado del carrito y el contador
        setCart(updatedCart);
        setCartCount(prevCount => prevCount + 1)
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId)

        const newTotalPrice = updatedCart.reduce((total, item) => total + (item.price * item.quantity), 0)

        setCart(updatedCart)
        setCartCount(prevCount => prevCount - 1)
        setTotalPrice(newTotalPrice)

    };

    return (
        <CartContext.Provider value={{ cart, addToCart, cartCount, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};