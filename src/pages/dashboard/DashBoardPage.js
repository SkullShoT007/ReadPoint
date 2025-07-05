import { DashBoardEmpty } from "./components/DashBoardEmpty"
import { DashBoardCard } from "./components/DashBoardCard"
import { useEffect, useState } from "react"
import { getUserOrders } from "../../services"
import { useTitle } from "../../hooks/useTitle"
import { toast } from "react-toastify"
export const DashBoardPage = () => {
  useTitle("User Dashboard");
  const [orders, setOrders] = useState([]);
  
  useEffect(()=>{
    async function fetchOrders()
    {
      try{
        const data = await getUserOrders()
      setOrders(data)
      }catch(error)
      {
        toast.error(error.message)
      }
      
    }
    fetchOrders()
  }, [])
  
  return (
    <main>
      <section>
        <h1 className="text-2xl text-center text-bold">DashBoard</h1>
      </section>
      {orders.length && orders.map((order)=> (<DashBoardCard key = {order.id} order = {order}/>))}
      <section>
       
      </section>
      <section>
        {!orders.length && <DashBoardEmpty/>}
      </section>
    </main>
    
  )
}
