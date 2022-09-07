import './Item.css'
import {Link} from 'react-router-dom';

const Item = ({ prod }) => {
    const { image, name, id } = prod
    return (
        <div className='item'>
            <img alt={name} src={image} />
            <h4 className="tituloCard">{name}</h4>
            <Link to={`/item/${id}`}>
                <button>Ver Producto</button>
            </Link>
        </div>
    )
}

export default Item;
