// import { useEffect ,  useState } from "react"

import { useLoaderData } from "react-router-dom"

function Github() {
    // const [Data , setData] = useState([])
    // useEffect(() =>{
    //      fetch('https://api.github.com/users/imakasx')
    //     .then(response => response.json())
    //     .then(data => 
    //     // console.log(data)
    //     setData(data)
    // )
    // },[])
   

    const Data = useLoaderData()

    return(
        <div className="text-center">
            Github : {Data.followers}
            <img src={Data.avatar_url} alt="Git picuture" />
        </div>
    )
}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch ('https://api.github.com/users/imakasx')
    return response.json()
}