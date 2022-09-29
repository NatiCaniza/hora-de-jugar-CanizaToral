import {useState, useEffect} from "react";
import './ItemCount.css';

export const ItemCount = ({stock , initial , onAdd}) =>{
    const [itemCount, setItemCount] = useState(initial);

    useEffect(() => {
        setItemCount(initial)
    }, [initial])

    const incrementar = () =>{
        if (itemCount < stock){
            setItemCount(itemCount + 1)
        }
    }

    const decrementar = () =>{
        if(itemCount > 0){
            setItemCount(itemCount - 1)
        }
    }

    return(
        <div>
            <div className="agregarQuitarItem">
                <button className="botonAgregarQuitar" onClick={decrementar}>-</button>
                <p className="cantidadItem">{itemCount}</p>
                <button className="botonAgregarQuitar" onClick={incrementar}>+</button>
            </div>
            <button className="agregarAlCarrito" onClick={()=>onAdd(itemCount)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;