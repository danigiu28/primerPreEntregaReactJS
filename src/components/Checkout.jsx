import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "./context/CartContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
    const { cart, clear, getCountProducts, getSumProducts } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");
    const [errors, setErrors] = useState({});

    const generarOrden = () => {

        const errors = {};
        if (nombre === "") {
            errors.nombre = "El nombre es requerido";
        }
        if (email === "") {
            errors.email = "El email es requerido";
        }
        if (telephone === "") {
            errors.telephone = "El teléfono es requerido";
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        const buyer = { nombre: nombre, email: email, telephone: telephone };
        const items = cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio, quantity: item.quantity }));
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const order = { buyer: buyer, items: items, date: currentDate, total: getSumProducts() };

        //Agrego un nuevo documento a la colección Orders
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
        });
    }

    useEffect(() => {
        if (orderId) {
            setNombre("");
            setEmail("");
            setTelephone("");
            clear();
        }
    }, [orderId, clear]);

    if (getCountProducts() == 0 && !orderId) {
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
        <div className="container">
            {!orderId ?
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" value={nombre} onInput={(e) => { setNombre(e.target.value) }} />
                                {errors.nombre && <div style={{ color: "#D96704" }}>{errors.nombre}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" value={email} onInput={(e) => { setEmail(e.target.value) }} />
                                {errors.email && <div style={{ color: "#D96704" }}>{errors.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Telephone</label>
                                <input type="text" className="form-control" value={telephone} onInput={(e) => { setTelephone(e.target.value) }} />
                                {errors.telephone && <div style={{ color: "#D96704" }}>{errors.telephone}</div>}
                            </div>

                            <button type="button" className="btn text-white rounded-0" style={{ backgroundColor: "#D96704" }} onClick={generarOrden} >Generar Orden</button>
                        </form>
                    </div>
                    <div className="col">
                        <table className="table">
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                        <td>{item.nombre}</td>
                                        <td>x {item.quantity}</td>
                                        <td className="text-end">€{item.precio}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={3}><b>Total</b></td>
                                    <td className="text-end"><b>€ {getSumProducts()}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> : ""}
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert text-white rounded-0" style={{ backgroundColor: "#D96704" }} role="alert">Felicitaciones! Tu ID de Compra es: <b> {orderId} </b></div> : ""}
                </div>
            </div>
        </div>
    )
}




export default Checkout;