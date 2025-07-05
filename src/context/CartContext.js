import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "../reducers/CartReducer"

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState)

export const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(CartReducer, cartInitialState)
    function addToCart(product)
    {
        const updatedCartList = state.cartList.concat(product)
        const updatedTotal = state.total + Number(product.price)
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList,
                total: updatedTotal
            }
        })
    }
    function removeFromCart(product)
    {
        const updatedCartList = state.cartList.filter((item) => item.id !== product.id)
        const updatedTotal = state.total - Number(product.price)

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList,
                total: updatedTotal
            }
        })

    }
    function clearCart()
    {
        const updatedCartList = []
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: updatedCartList,
                total: 0
            }
        })
    }
    
    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    }
    return(
        <CartContext.Provider value = {value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => 
{
    const context = useContext(CartContext)
    return context
    
}