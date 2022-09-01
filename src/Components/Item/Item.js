import './Item.css'

const Item = ({ prod }) => {
    const {image,name,price} = prod
    return (
        <div className ='item'>
        <img  alt={name} src={image}/>
        <h4 className="tituloCard">{name}</h4>
        <h3>$ {price}</h3>
        <button>Ver Producto</button>
    </div>
    )
}

export default Item;
