const Item = ({ prod }) => {
    return (
        <div className="row">
            <div className="cardProductos">
                <img className="image" src={prod.image} alt='/'></img>
                <h3 className="tituloCard">{prod.name}</h3>
                <p className="textoProductos">{prod.description}</p>
                <p className="textoProductos">${prod.price}</p>
            </div>
        </div>
    )
}

export default Item
