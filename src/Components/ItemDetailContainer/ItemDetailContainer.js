import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { getDoc, doc } from "firebase/firestore";
import { db } from '../../utils/firebase'


const ItemDetailContainer = ({onAdd2}) => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const {productId} = useParams()
    useEffect(()=>{

        getDoc(doc(db, 'products', productId)).then(response =>{

            const values = response.data()

            const item = { id: response.id, ...values}
            setItem(item)
        }).finally(()=>{
            setLoading(false)
        })
    },[productId])

    const isLoading = loading ? <Loading /> : (
        <ItemDetail onAdd2={onAdd2} item={item} />
    );

    return(
        isLoading
    )
}

export default ItemDetailContainer;