import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { logout, getUser } from "../../services"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"

export const DropDownLoggedIn = ({dropDown, setDropDown}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    function handleLogout()
    {
        logout()
        navigate("/")
        setDropDown(false)
    }
    useEffect(() =>{
        async function fetchUser()
        {
            try{
                const data = await getUser();
            data.email ? setUser(data) : handleLogout();
            }catch(error)
            {
                toast.error(error.message)
            }
            
            
        }
        fetchUser()
        
     }, [])
  return (
    <div id="dropdownAvatar" className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate">{user.email}</div>
        </div>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li onClick={()=>setDropDown(false)}>
                <Link to="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
            </li>
            <li onClick={()=>setDropDown(false)}>
                <Link to="dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
        </ul>
        <div className="py-1">
            <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
        </div>
    </div>
  )
}