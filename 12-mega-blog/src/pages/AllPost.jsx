import React, {useState, useEffect} from "react";
import appwriteService from "../appwrite/config";
import {Container, Postcard} from "../components";

function AllPost(){

    const [posts, setPosts] = useState([]);
    useEffect(() => {},[])
    appwriteService.getPosts([]).then((posts) => setPosts(posts))

    return(
        <div>AllPost</div>
    )
}

export default AllPost