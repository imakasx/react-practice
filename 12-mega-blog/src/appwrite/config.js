import Conf from '../config/conf.js';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class AppwriteService {
    clinet = new Client();
    databases;
    bucket;
    constructor(){
        this.clinet
        .setEndpoint(Conf.appwriteUrl)
        .setProject(Conf.appwriteProjectId);
    }
}
const Service = new Service();
export default Service