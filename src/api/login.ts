import axios from "axios";

export type dataType = {
  username: string;
  password: string;
  
};

export const Login = async (data: dataType) => {
  const params = new URLSearchParams();
  params.append('username', data.username);
  params.append('password', data.password);

  return axios.post("http://127.0.0.1:8000/api/login", params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(response => {
          console.log("okey")

      return response;
    })
    .catch(error => {
      throw error;
    });
};