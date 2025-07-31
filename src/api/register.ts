import axios from "axios";


   export type FetchData = {
        name: string;
        surname: string;
        anrede: string;
        date_of_birth : string; 
        street_and_hausnumber : string;
        plz: string;
        city : string;
        email: string;
        password: string;
        role:string
      };

export const CreateUser = async (data: FetchData) =>  {

    return axios.post("http://127.0.0.1:8000/api/register", data)
        .then(response => {
          console.log(response)
        console.log("User created successfully:", response.status);
        return response.status;
        })
        .catch(error => {
        console.error("Error creating user:", error);
        throw error;
        });

}