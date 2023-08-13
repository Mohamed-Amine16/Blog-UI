import axios from "axios"; 

const instance = axios.create({
  baseURL :'http://192.168.10.72:5099/api/v1',
  headers: {
    "Content-Type": "application/json",
    timeout : 1000,
  }, 
});

export default instance;