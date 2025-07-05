import {Routes, Route} from 'react-router-dom'
import {HomePage, ProductList, DashBoardPage, CartPage, ProductDetail, Login, Register, Order, PageNotFound} from "../pages"

import { ProtectedRoutes } from './ProtectedRoutes'
export const AllRoutes = () => {
  
  return (
    <>
       <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='products' element = {<ProductList/>}/>
        <Route path='products/:id' element = {<ProductDetail/>}/>
        <Route path='dashboard' element = {<ProtectedRoutes> <DashBoardPage/> </ProtectedRoutes>}/>
        <Route path='cart' element = {<ProtectedRoutes> <CartPage/></ProtectedRoutes> }/>
        <Route path="Register" element = {<Register/>} />
        <Route path="Login" element = {<Login/>} />
        <Route path="order" element = {<ProtectedRoutes><Order/></ProtectedRoutes>} />
        <Route path="*" element ={<PageNotFound/>} />
        

       </Routes>
    </>
  )
}
