import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id)=>{
        const productExists = productCartList.some((elemento)=>elemento.id === id);
        return productExists;
    }

    const addItem=(product)=>{
        const newList=[...productCartList];

        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + product.quantity;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].price;
            setProductCartList(newList)
        }else{
                const newProduct={...product, quantity: product.quantity, totalPrice: product.quantity*product.price}
                const newList = [...productCartList];
                newList.push(newProduct);
                setProductCartList(newList);
            }
    }

    const removeItem = (idProduct)=>{
        const copyProducts = [...productCartList];
        const newProducts = copyProducts.filter(elemento=>elemento.id !== idProduct);
        setProductCartList(newProducts);
    }

    const clear=()=>{
        setProductCartList([])
    }

    const countCartWidget=()=>{
        let acumulador = 0
        productCartList.forEach(prod=>{acumulador += prod.quantity})
        return acumulador
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear, isInCart,countCartWidget}}>
            {children}
        </CartContext.Provider>
    )
}

