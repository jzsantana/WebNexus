import axios from "axios"

const apiCep = axios.create({
    viaCep: `https://viacep.com.br/ws/`
})

export default apiCep