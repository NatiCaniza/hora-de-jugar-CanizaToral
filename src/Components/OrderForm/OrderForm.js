import './OrderForm.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { db } from '../../utils/firebase'
import { Timestamp, addDoc, collection, query, where, getDocs, documentId, writeBatch } from 'firebase/firestore'

const OrderForm = () => {
    const { productCartList, countCartWidget, countCartTotal, clear } = useContext(CartContext)

    const totalCountCart = countCartWidget()
    const total = countCartTotal()

    const createOrder = async (e) => {
        e.preventDefault()
        const order = {
            buyer: {
                nombre: e.target.nombre.value,
                telefono: e.target.telefono.value,
                direccion: e.target.direccion.value,
                email: e.target.email.value,
            },
            items: productCartList,
            totalCountCart,
            total,
            date: Timestamp.fromDate(new Date())
        }
        addDoc(collection(db, 'orders'), order).then()

        const ids = productCartList.map(product => product.id)

        const productsRef = collection(db, 'products')


        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

        const { docs } = productsAddedFromFirestore

        const outOfStock = []

        const batch = writeBatch(db)

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedToCart = productCartList.find(product => product.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity

            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity })
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc })
            }
        })

        if (outOfStock.length === 0) {
            const orderRef = collection(db, 'orders')
            const orderAdded = await addDoc(orderRef, order)
            batch.commit()
            console.log(`El id de su orden es: ${orderAdded.id}`)
            clear()
        } else {
            console.log('Hay productos que estan fuera de stock')
        }
    }

    return (
        <div>
            <h1>
                Formulario de envío
            </h1>
            <form className='orderForm' onSubmit={createOrder}>
                <label className='labelForm'>
                    Nombre:
                    <input type="text" name="nombre" />
                </label>
                <label className='labelForm'>
                    Teléfono:
                    <input type="tel" name="telefono" />
                </label>
                <label className='labelForm'>
                    Dirección de envío:
                    <input type="text" name="direccion" />
                </label>
                <label className='labelForm'>
                    Email:
                    <input type="email" name="email" />
                </label>
                <button className='buttonForm' type="submit" >Terminar compra</button>
            </form>
        </div>
    )
}

export default OrderForm;