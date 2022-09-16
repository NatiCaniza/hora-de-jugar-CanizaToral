import './CartWidget.css';
import {useContext} from 'react'
import { CartContext } from '../../Context/CartContext';

function CartWidget({ sumaTotalCompras }) {
    const { countCartWidget, productCartList } = useContext(CartContext)
    sumaTotalCompras = countCartWidget()
    return (
        <div>
            {
                productCartList.length > 0 &&

                <div>
                    <div className='bolsaDeCompras'>
                        <img src='/img/bolsa-de-compra.png' alt='...' />
                    </div>
                    <div className='sumaTotalCompras'>{sumaTotalCompras}
                    </div>
                </div>
            }
        </div>
    );
}

export default CartWidget;


