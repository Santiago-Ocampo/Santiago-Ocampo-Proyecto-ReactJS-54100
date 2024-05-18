import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { idProduct } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const firestore = getFirestore();
            const productRef = doc(firestore, "Items", idProduct);
            const productSnap = await getDoc(productRef);
            if (productSnap.exists()) {
                setProduct({ id: productSnap.id, ...productSnap.data() });
            } else {
                console.log("No se encontró el producto");
            }
        };

        fetchProduct();
    }, [idProduct]);

    return (
        <div className="item-detail-container">
            <div className="item-detail">
                {idProduct ? <ItemDetail product={product} /> : <p>No se ha seleccionado ningún producto</p>}
            </div>
        </div>
    )
}
export default ItemDetailContainer
