import './CartWidget.css';
import {useContext} from 'react'
import { CartContext } from '../../Context/CartContext';

function CartWidget({sumaTotalCompras}) {
    const { countCartWidget } = useContext(CartContext)
    sumaTotalCompras = countCartWidget()
    return (
        <div>
            <div className='bolsaDeCompras'>
            <img src='/img/bolsa-de-compra.png' alt='...'/>
            </div>
            <div className='sumaTotalCompras'>{sumaTotalCompras}
            </div>
        </div>
    );
}

export default CartWidget;
