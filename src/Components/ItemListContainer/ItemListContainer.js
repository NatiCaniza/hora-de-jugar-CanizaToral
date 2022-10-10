import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../utils/firebase'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
//Filtra los productos por categorias
        const collectionRef = !categoryId
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                const values = doc.data()
                return { id: doc.id, ...values }
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if (loading) {
        return <Loading />
    }

    return (
        <div className='ItemListContainer'>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;