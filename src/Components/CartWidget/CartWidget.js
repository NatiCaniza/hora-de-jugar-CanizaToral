import './CartWidget.css';
import {useContext} from 'react'
import { CartContext } from '../../Context/CartContext';

function CartWidget() {
    const { countCartWidget, productCartList } = useContext(CartContext)

    return (
        <div>
            {
                productCartList.length > 0 &&

                <div>
                    <div className='bolsaDeCompras'>
                        <img src='/img/bolsa-de-compra.png' alt='Bolsa de Compras' />
                    </div>
                    <div className='totalQuantity'>{countCartWidget()}
                    </div>
                </div>
            }
        </div>
    );
}

export default CartWidget;


