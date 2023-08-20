// Network Call {HTTPS / HTTPS }
import axios from 'axios';

/*

This is the NetWorking 

    HTTP calls
    1. Get ----> Read the data,
    2  Post ----> To write  the data,
    3. Put ----> To update the data,
    4. Delete ----> To delete the Data.
    { CRUD OPERATION }
 */

export const ApiClient = {
    //getting the data
    get (){

    },
    // posting the data
    async post(URL , DATA){
        try{
            const response =  await axios.post(URL,DATA);
            return response;
        }
        catch(err){
            throw err;
        }
    },

    // Updating the data
    Put(){

    },

    // deletion of the data 
    delete(){

    }
}