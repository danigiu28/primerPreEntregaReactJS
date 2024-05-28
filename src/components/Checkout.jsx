import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
//import arrayProductos from "./json/productos.json";
import { useEffect, useState } from "react";

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");

    //Cargo los productos vía JSON
    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.filter(item => item.precio < 20));
            }, 2000)
        });

        promesa.then(respuesta => {
            setCart(respuesta);
        })
    }, []) */

    //Cargo los productos vía Firestore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        getDocs(itemsCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setCart(snapShot.docs.map(item => ({ id: item.id, ...item.data() })));
            }
        });
    }, []);

    const calcularTotal = () => {
        const total = cart.reduce((acumulador, item) => acumulador + item.precio, 0);
        return parseFloat(total.toFixed(2));
    };

    const generarOrden = () => {
        const buyer = { nombre: nombre, email: email, telephone: telephone };
        const items = cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio }));
        const order = { buyer: buyer, items: items, total: calcularTotal() };
        //console.log(order);

        //Agrego un nuevo documento al Firestore
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
        })

        // Para agregar todos los productos de mi array JSON a mi BD Firestore
        /* const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        arrayProductos.forEach(item => {
            addDoc(itemsCollection, item);
        })
        console.log("Proceso de carga de productos completa"); */

        // Modificar un Documento por ID en Firestore
        /* const db = getFirestore();
        const orderDoc = doc(db, "productos", "0lqyzdi5RSQb5oYi7MVb");
        updateDoc(orderDoc, {precio:31.95, nombre:"Ex-Vestido de popelín estampado de niña", precioPromocional:28.95}).then(data => {
            console.log("El Producto se actualizó correctamente!");
        }) */

        // Modificar más de un Document con Batch en Firestore
        /* const db = getFirestore();
        const doc1 = doc(db, "productos", "0lqyzdi5RSQb5oYi7MVb");
        const doc2 = doc(db, "productos", "4Mg6Q00CLhIlWT02kcG1");
        const doc3 = doc(db, "productos", "7SwhkuJ81WcEsGvY8gdo");
        const batch = writeBatch(db);
        batch.update(doc1, {stock:2});
        batch.update(doc2, {stock:20});
        batch.set(doc3, {stock:2}); // ojo porque borra toda la info, solo queda "stock:2"
        batch.commit();
        console.log("Productos actualizados!"); */

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telephone</label>
                            <input type="text" className="form-control" onInput={(e) => { setTelephone(e.target.value) }} />
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
                                    <td className="text-end">€{item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}><b>Total</b></td>
                                <td className="text-end"><b>€ {calcularTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert text-white rounded-0" style={{ backgroundColor: "#D96704" }} role="alert">Felicitaciones! Tu ID de Compra es: <b> {orderId} </b></div> : ""}
                </div>
            </div>
        </div>
    )
}




export default Checkout;