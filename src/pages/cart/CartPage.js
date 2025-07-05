import { EmptyCart } from "./components/EmptyCart"
import { CartList } from "./components/CartList"
import { useCart } from "../../context/CartContext"
export const CartPage = () => {
   const {cartList} = useCart()
  return (
   
    <main>
        {cartList.length === 0 ? (<EmptyCart />) : (<CartList />)}
    </main>
  )
}
