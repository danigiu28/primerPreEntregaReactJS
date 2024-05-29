import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/images/trash.svg"

const Cart = () => {
    const { cart, removeItem, clear, getCountProducts, getSumProducts } = useContext(CartContext);

    if (getCountProducts() == 0) {
        return (
            <div className="container my-2">
                <div className="row">
                    <div className="col text-center text-white rounded-0" style={{ backgroundColor: "#D96704" }}>
                        <h3>¡El carrito de compras se encuentra vacío!</h3>
                        <Link to={"/"} className="btn bg-white my-2" style={{ color: "#D96704" }}> <b>Volver a la Página de Inicio</b></Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="text-end"><button className="btn text-white rounded-0" style={{ backgroundColor: "#D96704" }} onClick={clear}>Vaciar Carrito</button></td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={120} /></td>
                                    <td className="align-middle text-center">{item.nombre}</td>
                                    <td className="align-middle text-center">€ {item.precio}</td>
                                    <td className="align-middle text-center">{item.quantity}</td>
                                    <td className="align-middle text-end"><img src={trash} width={24} alt="Eliminar Producto" title="Eliminar Producto" onClick={() => { removeItem(item.id) }} /></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2} className="text-center"><b>Total</b></td>
                                <td className="text-center"><b>€ {getSumProducts()}</b></td>
                                <td>&nbsp;</td>
                                <td className="text-end"><Link to={"/checkout"} className="btn text-white rounded-0" style={{ backgroundColor: "#D96704" }}>Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;