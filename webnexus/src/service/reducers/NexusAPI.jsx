import axios from "axios"

export const NexusAPI = axios.create({
    baseURL: `http://10.109.71.43:8000/`
})
