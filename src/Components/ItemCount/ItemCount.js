import {useState} from "react";
import './ItemCount.css';
import ImagenCard from "../../img/carreraDeMente.jpg";

export const ItemCount = ({stock , initial , onAdd}) =>{
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
        setItemStock(itemStock - itemCount);
        setItemCount(0)
    }

    return(
        <div className="cardProductos">
            <img src={ImagenCard}/>
            <p className="tituloCard">Carrera de Mente</p>
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