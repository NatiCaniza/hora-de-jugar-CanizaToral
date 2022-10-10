import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { useState } from "react";
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({item}) => {
    const {name, price, description, image, initial, stock} = item

    const {addItem} = useContext(CartContext);
    const [totalQuantity, setTotalQuantity] = useState(0);

//Agrega productos al carrito
    const onAdd = (count)=>{
        const newProduct={...item, quantity:count}
        addItem(newProduct);
        if (count > 0) setTotalQuantity(totalQuantity + count);
    }

    return (
        <div className='itemDetail'>
            <img className='itemImage' src={image} alt={name}/>
            <div className='itemInformacion'>
                <h4 className="tituloCard">{name}</h4>
                <p className="textodetail">{description}</p>
                <h3>$ {price}</h3>
                <div>
                    {
                        totalQuantity === 0 ? (
                            <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
                        ) : (
                            <Link to='/cartContainer'><button className="itemDetailButton">Ir a Mi Carrito</button>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;