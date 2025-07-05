import HeroImage from "../../../assets/ebook hero.avif"
import {Link} from 'react-router-dom'
export const Hero = () => {
  return (
    <div className="flex justify-between my-2 lg:flex-row sm:flex-col">
        <div className="flex flex-col justify-evenly">
            <h1 className='text-6xl font-bold'>The Ultimate eBook Store</h1>
            <p>Discover and buy your favorite eBooks anytime, anywhere. Instant access. Endless stories.</p>
                <Link to = "/products" type = "button" className = "p-1 bg-customBlack text-customWhite hover:bg-customWhite hover:text-customBlack rounded w-32 border border-customBlack">Explore Ebooks</Link>
               
        </div>
        <div className="flex justify-center items-center">
            <img className="max-w-xl rounded" src={HeroImage} alt="heroImage" />
        </div>
    </div>
  )
}
