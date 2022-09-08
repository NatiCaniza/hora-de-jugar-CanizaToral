import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { useState } from "react";
import {Link} from 'react-router-dom'

const ItemDetail = ({item, onAdd2}) => {
    const {name, price, description, image, initial, stock} = item

    const [sumaTotalCompras, setSumaTotalCompras] = useState(0);
    const onAdd = (value) => {
        if (value > 0) setSumaTotalCompras(sumaTotalCompras + value);
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
                        sumaTotalCompras === 0 ? (
                            <ItemCount initial={initial} stock={stock} onAdd={onAdd} onAdd2={onAdd2} />
                        ) : (
                            <Link to='/miCarrito'><button className="itemDetailButton">Ir a Mi Carrito</button>
                            </Link>
                        )
                    }
                </div>
                
            </div>
        </div>
    )
}

export default ItemDetail;