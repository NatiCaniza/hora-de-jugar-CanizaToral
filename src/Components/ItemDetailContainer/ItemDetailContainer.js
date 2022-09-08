import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import {getItem} from "../../asyncMock";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'

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

    const isLoading = loading ? <h2 className="loading">Cargando Productos...</h2> : (
        <ItemDetail onAdd2={onAdd2} item={item} />
    );

    return(
        isLoading
    )
}

export default ItemDetailContainer;