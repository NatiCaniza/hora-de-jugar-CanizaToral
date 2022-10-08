import './CartWidget.css';
import {useContext} from 'react'
import { CartContext } from '../../Context/CartContext';

function CartWidget({ totalQuantity }) {
    const { countCartWidget, productCartList } = useContext(CartContext)
    totalQuantity = countCartWidget()
    return (
        <div>
            {
                productCartList.length > 0 &&

                <div>
                    <div className='bolsaDeCompras'>
                        <img src='/img/bolsa-de-compra.png' alt='...' />
                    </div>
                    <div className='totalQuantity'>{totalQuantity}
                    </div>
                </div>
            }
        </div>
    );
}

export default CartWidget;


