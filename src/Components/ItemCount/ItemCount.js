import {useState, useEffect} from "react";
import './ItemCount.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ItemCount = ({stock , initial , onAdd}) =>{
    const [itemCount, setItemCount] = useState(initial);

    useEffect(() => {
        setItemCount(initial)
    }, [initial])

    const addProduct = () =>{
        if (itemCount < stock){
            setItemCount(itemCount + 1)
        }
    }

    const removeProduct = () =>{
        if(itemCount > 0){
            setItemCount(itemCount - 1)
        }
    }

    const cartNotification = () => {
        toast('🦄 Wow so easy!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return (
        <div>
            <div className="agregarQuitarItem">
                <button className="botonAgregarQuitar" onClick={removeProduct}>-</button>
                <p className="cantidadItem">{itemCount}</p>
                <button className="botonAgregarQuitar" onClick={addProduct}>+</button>
            </div>
            <button className="agregarAlCarrito" onClick={() => {
                onAdd(itemCount);
                cartNotification();
            }
            }>Agregar al Carrito</button>
            <ToastContainer />
        </div>
    )
}

export default ItemCount;