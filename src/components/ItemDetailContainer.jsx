import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [visible, setVisible] = useState(true);
    const { id } = useParams();

    //Acceso a un producto por ID en Firestore
    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "productos", id);
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setVisible(false);
            }
        });
    }, [id]);

    return (
        <div className="container">
            <div className="row my-5">
                {visible ? <Loading /> : <ItemDetail item={item} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer;