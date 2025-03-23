import configs from "../configs/configs";
import { Client, ID, Databases,Storage,Query} from "appwrite";

export class MainConfigService{
     client = new Client();
     databases;
     storage;
     constructor(){
        this.client
            .setEndpoint(configs.appwriteUrl)
            .setProject(configs.appwriteProjectId)
            this.databases = new Databases(this.client);
            this.storage = new Storage(this.client);
     }
     async createPost({title,content,slug,userId,status,featuredImage,}){
        try {
           return await this.databases.createDocument(
                configs.appwriteDatabaseId,
                configs.appwriteCollectionId,
                //Document ID
                slug,
                {
                    title,
                    content,
                    userId,
                    status,
                    featuredImage,
                }
            );
        } catch (error) {
            throw error;
        }
        
     }
     async updatePost(slug,{title,content,status,featuredImage}){
        try {
            return await this.databases.updateDocument(
                configs.appwriteDatabaseId,
                configs.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    featuredImage,
                }
            );
        } catch (error) {
            throw error;
        }
     }
     async deleatePost(slug){
        try {
             await this.databases.deleteDocument(
                configs.appwriteDatabaseId,
                configs.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            throw error;
            return false;
        }
     }
        async getPost(slug){
            try {
                return await this.databases.getDocument(
                    configs.appwriteDatabaseId,
                    configs.appwriteCollectionId,
                    slug
                );
            } catch (error) {
                throw error;
                return false;
            }
        }
        async getposts(){
            try {
                return await this.databases.listDocuments(
                    configs.appwriteDatabaseId,
                    configs.appwriteCollectionId,
                    [Query.equal("status", "active")],
                );
            } catch (error) {
                throw error;
            }
        }
        async uploadFile(file){
            try {
                return await this.storage.createFile(
                    configs.appwriteBucketId,
                    ID.unique(),
                    file,
                );
            } catch (error) {
                throw error;
            }
        }
        async deleteFile(fileId){
            try {
                return await this.storage.deleteFile(
                    configs.appwriteBucketId,
                    fileId,
                );
                return true;
            } catch (error) {
                throw error;
                return false;
            }
        }
        getfilepreview(fileId){
            return this.storage.getFilePreview(
                configs.appwriteBucketId,
                fileId,
            )
        }
}
const MainConfigService = new MainConfigService();
export default MainConfigService;