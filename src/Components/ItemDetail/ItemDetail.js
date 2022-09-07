import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({onAdd, item}) => {
    const {name, price, description, image, initial, stock} = item
    return (
        <div className='itemDetail'>
            <img className='itemImage' src={image} alt={name}/>
            <div className='itemInformacion'>
                <h4 className="tituloCard">{name}</h4>
                <p className="textodetail">{description}</p>
                <h3>$ {price}</h3>
                <ItemCount initial={initial} stock={stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;