import {useState} from "react";
import './ItemCount.css';

export const ItemCount = ({stock , initial , onAdd, onAdd2}) =>{
    const [itemCount, setItemCount] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);

    const incrementar = () =>{
        if (itemCount < itemStock){
            setItemCount(itemCount + 1)
        }
    }

    const decrementar = () =>{
        if(itemCount > 0){
            setItemCount(itemCount - 1)
        }
    }

    const handleAdd = () => {
        onAdd(itemCount);
        onAdd2(itemCount);
        setItemStock(itemStock - itemCount);
        setItemCount(0)
    }

    return(
        <div>
            <div className="agregarQuitarItem">
                <button className="botonAgregarQuitar" onClick={decrementar}>-</button>
                <p className="cantidadItem">{itemCount}</p>
                <button className="botonAgregarQuitar" onClick={incrementar}>+</button>
            </div>
            <button className="agregarAlCarrito" onClick={handleAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;