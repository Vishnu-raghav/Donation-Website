import {conf} from "../conf/conf"
import {Client,ID,Databases} from 'appwrite'

export class Service{
  client = new Client()
  databases;

   constructor (){
    this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
   }

   async createNgo({name, image, donationlink, description, objectives, keyPrograms, successStories, howYouCanHelp}){
    try {
        const uniqeNgoId =  ID.unique();
        console.log("Unique NGO ID:", uniqeNgoId);
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            uniqeNgoId,
          {
            name : "vishnu",
            Image : image,
            donationlink,
            description,
            objectives,
            keyPrograms,
            successStories,
            howYouCanHelp,
          }
        )
    } catch (error) {
        console.log("Appwrite service :: createNgo :: error",error)
    }
   }

   async getAllNgo(){
    try {
        const response = await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
        )
        console.log("Full Response:", response);
        if (response && response.documents) {
            return response.documents;  
          } else {
            console.error("Documents field is missing in the response", response);
            return []; 
          }
    } catch (error) {
        console.log("Appwrite serive :: getPosts :: error", error);
        return []
    }
   }

   async getNgoById(id) {
    try {
      const response = await this.databases.getDocument(
        conf.appwriteDatabaseId, 
        conf.appwriteCollectionId, 
        id
      );
      return response; 
    } catch (error) {
      console.error('Error fetching NGO by ID:', error);
      throw error;
    }
  }
}

const service = new Service()

export default service