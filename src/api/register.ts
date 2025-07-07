import axios from "axios";


   export type FetchData = {
        nachName: string;
        vorName: string;
        anrede: string;
        geburtstag: string; 
        straßeAndHausnummer: string;
        plz: string;
        stadt: string;
        land: string;
        email: string;
        password: string;
      };

export const CreateUser = async (data: FetchData) =>  {

    return axios.post("http://localhost:8080/api/register", data)
        .then(response => {
        console.log("User created successfully:", response.data);
        return response.data;
        })
        .catch(error => {
        console.error("Error creating user:", error);
        throw error;
        });

}