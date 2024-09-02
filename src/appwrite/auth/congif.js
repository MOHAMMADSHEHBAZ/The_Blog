import conf from "../../config/Conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,uesrId}){
        try{
            return await this.databases.createDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    uesrId,
                }
            )
        }
        catch(error){
            throw error;
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument
            (
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                queries,
            )
        } catch (error) {
            throw error;
        }
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            throw error;
            return false;
        }
    }

    async deleteFile(fileid){
        try {
            await this.storage.deleteFile(
                conf.appWriteBucketId,
                fileid,
            )
            return true;
        } catch (error) {
            throw error;
            return false
        }
    }

    async filePreview(fileid){
        try {
            return this.storage.getFilePreview(
                conf.appWriteBucketId,
                fileid,
            )
        } catch (error) {
            throw error;
        }
    } 

}

const service = new Service();

export default service;

