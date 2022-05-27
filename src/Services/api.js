import axios, { Axios } from "axios";

export const key = "484f7db494e740512ef50e73e5620ff82143c52d";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/', 
    headers: {'Authorization': `Bearer ${key}`
    }
})

export default api;