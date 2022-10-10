import './OrderForm.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { db } from '../../utils/firebase'
import { Timestamp, addDoc, collection, query, where, getDocs, documentId, writeBatch } from 'firebase/firestore'
import swal from 'sweetalert';

//Funciones que generan una notificacion cuando se termina correctamente la compra o cuando el producto esta fuera de stock
const successfulOrder = (param)=>{
    swal({
        title: 'Compra realizada con éxito!',
        text: `El código de su compra es: ${param.id}`,
        button: 'Ok',
    })
}

const wrongOrder = () =>{
    swal({
        title: 'Productos fuera de stock',
        text:'Revise su compra y vuelva a intentarlo nuevamente',
        button: 'Ok',
    })
}

//Se crea la orden de compra atraves de un formulario. Se actualiza es stock en la base de datos
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
            batch.commit();
            e.target.nombre.value= '';
            e.target.telefono.value= '';
            e.target.direccion.value= '';
            e.target.email.value= '';
            successfulOrder(orderAdded);
            clear();
        } else {
            wrongOrder();
            e.target.nombre.value= '';
            e.target.telefono.value= '';
            e.target.direccion.value= '';
            e.target.email.value= '';
        }
        clear()
    }

    return (
        <div>
            <h1>
                Formulario de envío
            </h1>
            <form className='orderForm' onSubmit={createOrder}>
                <label className='labelForm'>
                    Nombre:
                    <input type="text" name="nombre" placeholder='Nombre' />
                </label>
                <label className='labelForm'>
                    Teléfono:
                    <input type="tel" name="telefono" placeholder='Teléfono' />
                </label>
                <label className='labelForm'>
                    Dirección de envío:
                    <input type="text" name="direccion" placeholder='Dirección de envío' />
                </label>
                <label className='labelForm'>
                    Email:
                    <input type="email" name="email" placeholder='Email'/>
                </label>
                <button className='buttonForm' type="submit" >Terminar compra</button>
            </form>
        </div>
    )
}

export default OrderForm;