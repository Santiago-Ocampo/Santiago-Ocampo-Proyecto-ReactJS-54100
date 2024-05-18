import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const firestore = getFirestore();
                const itemsCollection = collection(firestore, "Items");
                const querySnapshot = await getDocs(itemsCollection);
                const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [idCategory]);

    return (
        <div className="container">
            <h2 className="mensaje">{greeting} </h2>
            <div className="item-list">
                <ItemList products={products} />
            </div>
        </div>
    );

};
export default ItemListContainer

// se debe encargar de consumir la api o una promesa que nos traiga el listado de productos
// esos hay que guardarlos en variables de estado y pasarselos por prop a Itemlist