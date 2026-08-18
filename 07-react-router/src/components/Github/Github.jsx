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
        <div>Github : {Data.followers}</div>
    )
}
export default Github