import {useState} from "react";
import './ItemCount.css';
import ImagenCard from "../../img/carreraDeMente.jpg";

export const ItemCount = ({stock , initial , onAdd}) =>{
    const [itemCount, setItemCount] = useState(initial);

    const incrementar = () =>{
        if (itemCount < stock){
            setItemCount(itemCount + 1)
        }
    }

    const decrementar = () =>{
        if(itemCount > 1){
            setItemCount(itemCount - 1)
        }
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
            <button className="agregarAlCarrito" onClick={()=>(onAdd(itemCount))}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;