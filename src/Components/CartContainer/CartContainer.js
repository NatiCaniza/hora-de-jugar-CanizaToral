import React from 'react';
import './CartContainer.css'; 
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import {Link} from 'react-router-dom'
import swal from 'sweetalert';


const CartContainer = () => {
    const {productCartList, clear} = useContext(CartContext)

    const mostrarAlerta = () =>{
        swal({
            title: 'Eliminar productos',
            text: 'Estás seguro que quieres vaciar tu carrito?',
            icon:'warning',
            buttons: ['No', 'Si']
        }).then(respuesta=>{
            if(respuesta){
                swal({text: 'Tus productos se han eliminado del carrito',
                icon: 'success'})
                clear();
            }
        })
    }
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
                            
                            <button className='buttonCartContainer' onClick={()=> mostrarAlerta()}>Vaciar el carrito</button>
                        </>
                        :
                        <div className='cartVacio'>
                            <h2>Tu carrito está vacío :(</h2>
                            <Link className='cartLink' to='/'>Click aquí para ver productos</Link>
                        </div>
                }
            </div>
    )
}

export default CartContainer;
