import './ItemList.css';
import Item from '../Item/Item'

//Se renderizan los productos
const ItemList = ({products})=>{
    const renderProducts = products.map((prod) => {
            return(
                <Item prod = {prod} key = {prod.id}/>
            )
        })
    

    return (
        <div>
            <div className='renderProducts'>{renderProducts}</div>
        </div>
    )
}

export default ItemList;

