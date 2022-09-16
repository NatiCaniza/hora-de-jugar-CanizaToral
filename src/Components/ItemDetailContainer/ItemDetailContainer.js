import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import {getItem} from "../../asyncMock";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";


const ItemDetailContainer = ({onAdd2}) => {
    const {productId} = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getItem(productId)
        .then((respuesta)=>{
            setItem(respuesta)
        })
        .finally(()=>{
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