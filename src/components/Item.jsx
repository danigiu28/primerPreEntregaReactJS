import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="col-md-4 text-center">
            <Link to={"/item/" + item.id} className="text-decoration-none">
                <div className="card border-0" >
                    <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                    <div className="card-body">
                        <p className="card-text text-uppercase">{item.nombre}</p>
                        <p className="card-text"><b>€ {item.precio}</b></p>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Item;