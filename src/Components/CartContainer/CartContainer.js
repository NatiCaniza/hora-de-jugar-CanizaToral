import React from 'react';
import './CartContainer.css'; 
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { CartItem } from '../CartItem/CartItem';


const CartContainer = () => {
    const {productCartList, clear} = useContext(CartContext)
    return (
            <div>
                <h1>Mi Carrito</h1>
                {
                    productCartList.length > 0 ?
                        <>
                            {
                                productCartList.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))
                            }
                            
                            <button className='buttonCartContainer' onClick={clear}>Vaciar el carrito</button>
                        </>
                        :
                        <h3>No has agregado productos :(</h3>
                }
            </div>
    )
}

export default CartContainer;
