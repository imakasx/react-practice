import conf from "../config/conf";

import {client , account } from "appwrite";

const appwriteClient = new client.Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    
const account = new account(appwriteClient);

const user = await account.create(
    ID: "unique()",
    "email@example.com",
    "password",
)