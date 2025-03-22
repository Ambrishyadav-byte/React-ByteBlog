import configs from "../configs/configs";
import { Client, Account, ID } from "appwrite";

export class AuthencationService{
       client = new Client();
       account;
       constructor(){
        this.client
            .setEndpoint(configs.appwriteUrl)
            .setProject(configs.appwriteProjectId)
            this.account = new Account(this.client); 
       }
       async Signup({email,password,name}) {
        try {
           const userAccount = await this.account.create(ID.unique() ,email,password,name);
           if (userAccount) {
            //automatic login
            return await this.login({ email, password });
           } else {
            return userAccount
           }
        } catch (error) {
            throw error;
        }
       }
       async login({email,password}){
        try {
            const loginSession= await this.account.createEmailPasswordSession(email,password);
            if(loginSession){
                console.log("Login Sucessful")
                return loginSession;
            }
            else{
                console.log("Login failed")
                return null;
            }
        } catch (error) {
            throw error;
        }
       }

       async getCurrentuser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
       }
       async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
       }
}
const authencationService = new AuthencationService()
export default authencationService;zz