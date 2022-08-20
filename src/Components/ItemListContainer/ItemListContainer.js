import './ItemListContainer.css';

const ItemListContainer = (greeting) => {
    return (
        <div className='ItemListContainer'>
            <h1>{greeting.greeting}</h1>
        </div>
    );
};

export default ItemListContainer;