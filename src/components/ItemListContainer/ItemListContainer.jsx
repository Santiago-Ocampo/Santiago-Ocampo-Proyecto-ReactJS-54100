import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container">
            <p className="mensaje">{greeting} </p>
        </div>
    );
}

export default ItemListContainer