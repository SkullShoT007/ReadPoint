import { Link } from "react-router-dom"
export const DashBoardCard = ({order}) => {
  return (
    <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
        <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
            <span>Order Id: {order.id}</span>
            <span>Total: {order.amountPaid}</span>
        </div>
        {order.cartList.map((item) => (
            <div key = {item.id} className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
            <div className="flex">
                <Link to={`/products/${item.id}`}>
                    <img className="w-32 rounded" src={item.poster} alt={item.name} />
                </Link>
                <div className="">
                    <Link to={`/products/${item.id}`}>
                        <p className="text-lg ml-2 dark:text-slate-200">{item.name}</p>
                    </Link>
                    <div className="text-lg m-2 dark:text-slate-200">
                        <span>${item.price}</span>
                    </div>
                </div>
            </div>
        </div>    
        ))}
        
    </div>
  )
}