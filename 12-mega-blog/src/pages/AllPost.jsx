import React, {useState, useEffect} from "react";
import appwriteService from "../appwrite/config";
import {Container, Postcard} from "../components";

function AllPost(){

    const [posts, setPosts] = useState([]);
    useEffect(() => {},[])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
            
        }
    })

    return(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div className="w-1/4 px-2 mb-4" key={post.$id} >
                            <PostCard post={post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost