import { useState, useEffect } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onQuantityChange }) => {
    const [count, setCount] = useState(initial)

    useEffect(() => {
        console.log("Received stock in ItemCount:", stock)
        setCount(initial)
    }, [stock, initial])

    const handleIncrement = () => {
        count < stock
            ? (setCount(count + 1), onQuantityChange(count + 1))
            : console.warn("Cannot increment, stock limit reached")
    }


    const handleDecrement = () => {
        count > 1
            ? (setCount(count - 1), onQuantityChange(count - 1))
            : console.warn("Cannot decrement below 1")
    }

    useEffect(() => {
        onQuantityChange(count)
    }, [count, onQuantityChange])

    return (
        <div className="item-count">
            <button className="count-button" onClick={handleDecrement}>-</button>
            <span className="count-value">{count}</span>
            <button className="count-button" onClick={handleIncrement}>+</button>
        </div>
    );
};

export default ItemCount;
