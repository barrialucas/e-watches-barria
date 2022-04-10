import {createContext, useState} from "react";

export const CartContext= createContext()

export const CartProvider=({children})=>{
    
    const [cart,setCart]=useState([])

    const addProduct=(prod)=>{
        setCart ([...cart,prod])
    }

    const isInCart =(id)=>{
        return cart.some(prod=>prod.id===id)
    }

    const cartCant =()=>{
        return cart.length
    }

    const cartTotal = () => {
        return cart.reduce((pp, prod) => pp += prod.price * prod.cantidad, 0)
    }

    const removeItem = (id) => {
        setCart( cart.filter((prod) => prod.id !== id) )
    }
    const cartEmpty = () => {
        setCart([])
    }

    const cantProdCart = () => {
        return cart.reduce((pp, prod) => pp + prod.cantidad, 0)
      }
    return(
        <CartContext.Provider value={{
            cart,addProduct,isInCart,cartCant,cartTotal,removeItem,cartEmpty,cantProdCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
