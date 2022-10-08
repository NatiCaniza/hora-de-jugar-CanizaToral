import './ItemList.css';
import Item from '../Item/Item'


const ItemList = ({products})=>{
    const renderProducts = products.map((prod) => {
            return(
                <Item prod = {prod} key = {prod.id}/>
            )
        })
    

    return (
        <div className='renderProducts'>{renderProducts}</div>
    )
}

export default ItemList;

