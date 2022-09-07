import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts,  getProductsByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [categoryId])

    if (loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <div className='ItemListContainer'>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

// const ItemListContainer = ({greeting}) => {
//     const [products, setProducts] = useState([])
//     useEffect(() =>{
//         getProducts().then(respuesta =>{
//             setProducts(respuesta)
//         })
//     }, [])

//     return (
//         <div className='ItemListContainer'>
//             <h1>{greeting.greeting}</h1>
//             <ItemList products={products}/>
//         </div>
        
//     );
// };



export default ItemListContainer;