import './ItemList.css';
import Item from '../Item/Item'


const ItemList = ({products, catalog})=>{
    const renderProducts = products.map((prod) => {
            return(
                <Item prod = {prod} key = {prod.id}/>
            )
        })
    

    return (
        <div>
            <h1>{catalog}</h1>
            <div className='renderProducts'>{renderProducts}</div>
        </div>
    )
}

export default ItemList;

