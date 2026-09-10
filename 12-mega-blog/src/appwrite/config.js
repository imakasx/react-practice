import conf from '../config/conf.js';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class AppwriteService {
    clinet = new Client();
    databases;
    bucket;
    constructor(){
        this.clinet
        .setEndpoint(Conf.appwriteUrl)
        .setProject(Conf.appwriteProjectId);
        this.databases = new Databases(this.clinet);
        this.bucket = new Storage(this.clinet);
    }
    async creatPost(title, content, slug, featuredImage, userId, status){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }catch(error){
            console.log("Appwrite service :: createPost :: error", error)
        }
    }
    async updatePost(slug,{
        title,
        content,
        featuredImage,
        status,
    }){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, 
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        }catch(error){
            console.log("Appwrite service :: deletePost :: error", error)
        }
    }
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }catch(error){
            console.log("Appwrite service :: deletePost :: error", error)
        }
    }
}
const Service = new Service();
export default Service