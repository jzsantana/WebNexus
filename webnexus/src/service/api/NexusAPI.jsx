import axios from "axios"

export const NexusAPI = axios.create({
    baseURL: `http://192.168.0.106:8080/`
})
