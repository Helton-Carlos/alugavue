import axios from "axios"
const baseUrl = axios.create({
    base:"http://localhost:3000"
})

export const api = {
    get(endpoint){
        return baseUrl.get(endpoint)
    }
}