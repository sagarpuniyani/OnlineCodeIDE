// Network Call {HTTPS / HTTPS }
import axios from 'axios';

/*

    HTTP calls
    1. Get ----> Read the data,
    2  Post ----> To write  the data,
    3. Put ----> To update the data,
    4. Delete ----> To delete the Data.
    { CRUD OPERATION }
 */

export const ApiClient = {
    get (){

    },
    async post(URL , DATA){
        try{
            const response =  await axios.post(URL,DATA);
            return response;
        }
        catch(err){
            throw err;
        }
    },
    Put(){

    },
    delete(){

    }
}