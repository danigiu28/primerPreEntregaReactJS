import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                </div>
                <div className="col-md-4">
                    <h1 className="fs-3 text-uppercase fw-semibold">{item.nombre}</h1>
                    <h2 className="fs-4 fw-bold">€ {item.precio}</h2>
                    <p className="small">{item.descripcion}</p>
                    <ItemCount stock={item.stock} />

                </div>
            </div>
        </div>
    )
}

export default ItemDetail;