import { Link } from "react-router-dom"
import { useTitle } from "../hooks/useTitle"
import Logo from "../components/assets/light-Logo.png"
export const PageNotFound = () => {
  useTitle("ReadPoint- Page not Found")
  return (
    <main>
        <section className="flex flex-col justify-center px-2">
            <div className="flex flex-col items-center my-4">
                <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white text-center">404, Oops!</p>
                <div className="max-w-xs">
                    <img className="" src={Logo} alt="" />
                </div>
            </div>
            <div className="flex justify-center my-4">
                <Link to ="/">
                    <button type="button" className="w-64 text-2xl text-white bg-customBlack hover:bg-customWhite hover:text-customBlack border border-customBlack font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">Back To Home</button>
                </Link>
            </div>
        </section>
    </main>
  )
}