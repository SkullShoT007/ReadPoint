import {Link, useNavigate} from "react-router-dom"
import LightLogo from "../assets/light-Logo.png"
import DarkLogo from "../assets/dark-logo.png"
import { useCart } from "../../context"
import {  useState } from "react"
import { Search } from "./sections/Search"
import { DropDownLoggedIn } from "../elements/DropDownLoggedIn"
import { DropDownLoggedOut } from "../elements/DropDownLoggedOut"

export const Header = () => {
    const {cartList } = useCart()
    const navigate = useNavigate()
    const [mode, setMode] = useState(false)
    function darkMode(){
        if(mode === false)
        {
            document.documentElement.classList.add("dark")
            setMode(true)
        }
        else if(mode === true)
        {
            document.documentElement.classList.remove("dark")
            setMode(false)
        }
    }
     const [search, setSearch] = useState(false)
     const [dropDown, setDropDown] = useState(false)
     
     const token = JSON.parse(sessionStorage.getItem("token"))
     
       
     
  return (
    <header>
        <nav className="bg-white border-gray-200 dark:bg-customBackground">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={mode? DarkLogo : LightLogo} className="h-8" alt="Flowbite Logo" />
                    <p className="text-2xl text-center mt-2">READPOINT</p>
                    
                </Link>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    {mode ? (<span className="bi bi-brightness-high-fill dark:text-white text-2xl mx-2" onClick={darkMode}></span>) : (<span className="bi bi-moon-fill dark:text-white text-2xl mx-2" onClick={darkMode}></span>)}
                    
                    
                    
                    <span className="bi bi-search dark:text-white text-2xl mx-2" onClick = {()=>{setSearch(!search)}}></span>
                    
                    <span onClick={() => navigate("/cart")} className="bi bi-cart-fill dark:text-white text-2xl mx-2 relative">
                        <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                    </span>
                    <span onClick = {() => setDropDown(!dropDown)} className="bi bi-person-circle dark:text-white text-2xl mx-2"></span>
                    {dropDown && (
                                    token ? <DropDownLoggedIn dropDown = {dropDown} setDropDown = {setDropDown}/> : <DropDownLoggedOut dropDown = {dropDown} setDropDown = {setDropDown}/>
                                )}
                </div>
            </div>
        </nav>
        {search ? (<Search search = {search} setSearch={setSearch}/>) : null}

    </header>
  )
}
