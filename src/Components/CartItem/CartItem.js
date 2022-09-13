import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import './CartItem.css';

export const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext);

    return (
        <div className='cartItem'>
            <img className='cartImg' src={item.image} alt={item.name}/>
            <div className='textoCartItem'>
                <h4 className='tituloCardCart'>{item.name}</h4>
                <p>Precio: $ {item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio Total: $ {item.totalPrice}</p>
                <button className='buttonCart' onClick={()=>removeItem(item.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}