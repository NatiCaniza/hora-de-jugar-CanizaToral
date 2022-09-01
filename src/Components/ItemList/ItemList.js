import './ItemList.css';
import Item from '../Item/Item'
import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts } from '../../asyncMock';

const ItemList = ()=>{
    const [products, setProducts] = useState([])
    useEffect(() =>{
        getProducts().then(respuesta =>{
            setProducts(respuesta)
        })
    }, [])

    const renderizarProductos = products.map((prod) => {
            return(
                <Item prod = {prod} key = {prod.id}/>
            )
        })
    

    return (
        <div className='renderizarProductos'>{renderizarProductos}</div>
    )
}

export default ItemList;

