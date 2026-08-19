import { useEffect ,  useState } from "react"

function Github() {
    const [Data , setData] = useState([])
    useEffect(() =>{
         fetch('https://api.github.com/users/imakasx')
        .then(response => response.json())
        .then(data => 
        // console.log(data)
        setData(data)
    )
    },[])
   

    return(
        <div className="text-center">
            Github : {Data.followers}
            <img src={Data.avatar_url} alt="Git picuture" />
        </div>
    )
}
export default Github