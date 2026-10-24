import React,{useEffect, useState} from "react";
import appwriteService from "../appwrite/config";
import {Container, PostCard} from "../components";
import { useNavigate,useParams } from "react-router-dom";

function EditPost(){\
    const [posts, setPosts] = useState([null]);
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate("/")
        }
    },[slug, navigate])

    return(
        <div className="p-8">Edit Post</div>
    )
}
export default EditPost