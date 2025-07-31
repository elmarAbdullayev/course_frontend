import axios from 'axios';


export function fetchAdminData(token: string) {
    return axios.post(
        "http://127.0.0.1:8000/api/verifytoken",{}, 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
}


export function fetchAdminDataGetProcess(token:string){
    const request = axios.get("http://127.0.0.1:8000/api/get_users",{
        headers: {
            Authorization: `Bearer ${token}`
        }

    })     
    
    return request
}