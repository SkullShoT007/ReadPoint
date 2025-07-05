export async function getUser()
{
    const token = JSON.parse(sessionStorage.getItem("token"))
    const rpid = JSON.parse(sessionStorage.getItem("rpid"))
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${rpid}`, {
                method: "GET",
                headers: {"Content-Type" : "Application/json", Authorization: `Bearer ${token}`}
            });
    if(!response.ok)
    {
      const error = new Error(response.statusText);
      error.status = response.status;
      throw error;

    }
    const data = await response.json()
    return data;
}
export async function getUserOrders()
{
    const token = JSON.parse(sessionStorage.getItem("token"));
    const rpid = JSON.parse(sessionStorage.getItem("rpid"));

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${rpid}`, {
                method: "GET",
                headers: {"Content-Type" : "application/json", Authorization: `Bearer ${token}`}
            });
   if(!response.ok)
    {
      const error = new Error(response.statusText);
      error.status = response.status;
      throw error;

    }
      
      const data = await response.json()
      return data;
}
export async function createOrder(order)
{
    const token = JSON.parse(sessionStorage.getItem("token"))
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json", Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(order)

        })
    if(!response.ok)
    {
      const error = new Error(response.statusText);
      error.status = response.status;
      throw error;

    }
        const data = await response.json()
        return data
}