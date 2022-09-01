import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting , onAdd}) => {

    return (
        <div className='ItemListContainer'>
            <h1>{greeting.greeting}</h1>
            <ItemList/>
        </div>
        
    );
};

export default ItemListContainer;