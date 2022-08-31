import './CartWidget.css';

function CartWidget({sumaTotalCompras}) {
    return (
        <div>
            <div className='bolsaDeCompras'>
            <img src='/img/bolsa-de-compra.png'/>
            </div>
            <div className='sumaTotalCompras'>{sumaTotalCompras}
            </div>
        </div>
    );
}

export default CartWidget;
