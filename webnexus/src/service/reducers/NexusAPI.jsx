import axios from "axios"

export const NexusAPI = axios.create({
    baseURL: `http://192.168.0.100:8080/api/v1/`
    
})
