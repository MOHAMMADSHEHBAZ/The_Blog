import conf from "../../config/Conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try{
          const user =  await this.account.create(ID.unique(),email,password,name);
          if (user) {
            return this.login({email,password});
          }
          else{
            return user;
          }
        }catch(error){
            throw error;
        }
    }

    async login({email,password}){
        try {
         return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
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

const authService = new AuthService();

export default authService;