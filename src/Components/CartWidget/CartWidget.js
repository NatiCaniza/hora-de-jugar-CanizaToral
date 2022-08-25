import './CartWidget.css';
import Cart from "../../img/bolsa-de-compra.png"

function CartWidget({sumaTotalCompras}) {
    return (
        <div>
            <div className='bolsaDeCompras'>
            <img src={Cart}/>
            </div>
            <div className='sumaTotalCompras'>{sumaTotalCompras}
            </div>
        </div>
    );
}

export default CartWidget;
