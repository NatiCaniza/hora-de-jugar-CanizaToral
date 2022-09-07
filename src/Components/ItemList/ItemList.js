import './ItemList.css';
import Item from '../Item/Item'


const ItemList = ({products})=>{
    const renderizarProductos = products.map((prod) => {
            return(
                <Item prod = {prod} key = {prod.id}/>
            )
        })
    

    return (
        <div className='renderizarProductos'>{renderizarProductos}</div>
    )
}

export default ItemList;

