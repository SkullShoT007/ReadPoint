export async function getProductList(searchParam)
{
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchParam ? searchParam : ""}`);
    if(!response.ok)
    if(!response.ok)
    {
      const error = new Error(response.statusText);
      error.status = response.status;
      throw error;

    }
    const data = await response.json();
    return data;
}

export async function getFeaturedList()
{
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if(!response.ok)
    if(!response.ok)
    {
      const error = new Error(response.statusText);
      error.status = response.status;
      throw error;

    }
      const data = await response.json();
      return data;
}

export async function getProduct(id)
{
  const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
  if(!response.ok)
    if(!response.ok)
    {
      const error = new Error(response.statusText);
      error.status = response.status;
      throw error;

    }
    
      const data = await response.json();
      return data;
}