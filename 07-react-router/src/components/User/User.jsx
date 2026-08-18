import { useParams } from "react-router-dom"
function User(){
    const {userid} = useParams()
    return(
        <div className="bg-amber-800 text-center p-3 text-3xl">User {userid} </div>
    )
}
export default User