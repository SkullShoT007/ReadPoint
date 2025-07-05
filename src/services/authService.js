export async function login(authDetail)
{
    const response = await fetch(`${process.env.REACT_APP_HOST}/Login`, {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(authDetail)
        })
        const data = await response.json()
    if(!response.ok)
    {
      const error = new Error(response.statusText);
      error.status = response.status;
      throw error;

    }
        if(data.accessToken)
        {
          sessionStorage.setItem("token", JSON.stringify(data.accessToken))
          sessionStorage.setItem("rpid", JSON.stringify(data.user.id))
        }
        return data;
}

export async function register(authDetails)
{
    const response = await fetch(`${process.env.REACT_APP_HOST}/Register`, {
                method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify(authDetails)
            })
    if(!response.ok)
    {
      const error = new Error(response.statusText);
      error.status = response.status;
      throw error;

    }
            const data = await response.json()
            
            if(data.accessToken)
            {
              sessionStorage.setItem("token", JSON.stringify(data.accessToken))
              sessionStorage.setItem("rpid", JSON.stringify(data.user.id))
            }
            return data;
}

export function logout()
{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("rpid")
}