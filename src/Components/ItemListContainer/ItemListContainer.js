import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting , onAdd}) => {

    return (
        <div className='ItemListContainer'>
            <h1>{greeting.greeting}</h1>
            <ItemList/>
            <ItemCount stock={10} initial={0} onAdd={onAdd}/>
        </div>
        
    );
};

export default ItemListContainer;