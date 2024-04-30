import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <>
            {items.map(prod => (
                <Item key={prod.id} item={prod} />
            ))}
        </>
    )
}

export default ItemList;