export const Ratings = ({rating}) => {
    let rating_array = Array(5).fill(false)
    for(let i = 0; i< rating;i++)
    {
        rating_array[i] = true;
    }
  return (
    
    <>
        {rating_array.map((value, index) => value? (<i key = {index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>) : (<i key = {index}className="text-lg bi bi-star text-yellow-500 mr-1"></i>))}
    </>
  )
}
