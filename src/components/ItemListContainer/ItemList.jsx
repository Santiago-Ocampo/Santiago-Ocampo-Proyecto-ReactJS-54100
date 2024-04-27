import Item from "./Item";
import "./ItemListContainer.css"

/*Renderizamos la lista de productos, recorrerlo y mostrarlo*/

const ItemList = ({ products }) => {
    return (
        <div className="item-list">
            {products.map((product) => {
                return <Item key={product.id} product={product} /> /*Pasamos el producto entero*/
            })}

        </div>
    )
}

export default ItemList
