import { useEffect, useState } from "react"; 
//import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();


//Acceso a productos via JSON

    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
            }, 2000)
        });

        promesa.then(respuesta => {
            setItems(respuesta);
        })
    }, [id]) */

    //Acceso a un producto por ID en Firestore
    // .id  => accedo al id del documento
    // .data() => accedo a todos los campos del cocumento
    /* useEffect (() => {
        const db = getFirestore();
        const docRef =  doc(db, "productos", "DQVFdVrbI1tcTUjZ6zQn");
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItems();
            }
        });
    }, []); */

    //Acceder a una Collection en Firestore

    /* useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        getDocs(itemsCollection).then(snapShot => {
            if (snapShot.size > 0){
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
            }
        });
    }, []); */

    // Acceder a una Collection en Firestore mediante una Query

    useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        //const queryCollection = query(itemsCollection, where("precio", ">" , 25 ));
        //const queryCollection = query(itemsCollection, where("precio", "<" , 25 ));
        //const queryCollection = query(itemsCollection, where("nombre", "==" , "Vestido de popelín estampado de niña"));
        //const queryCollection = query(itemsCollection, where("nombre", "!=" , "Vestido de popelín estampado de niña"));
        const queryCollection = query(itemsCollection, (where("precio", ">" , 30 ), where("categoria", "==" , "niña")));
        getDocs(queryCollection).then(snapShot => { 
            if (snapShot.size > 0){
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
            }
        });
    }, []);

    return (
        <div className="container">
            <div className="row my-5">
                <ItemList items={items} />
                {/* <p>{items.nombre}</p>
                <p><img src={items.imagen} alt={items.imagen} /></p>
                <p>€{items.precio}</p> */}
            </div>
        </div>
    )
}

export default ItemListContainer;