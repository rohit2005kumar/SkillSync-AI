import axios from "axios"
import { toast } from "react-toastify"


const api = axios.create({
    baseURL: "https://skillsync-ai-jq8w.onrender.com/",
    withCredentials: true
})

export async function register({ username, email, password }) {

    try {
        const response = await api.post('/api/auth/register', {
            username, email, password
        })
 toast.success(response.data.message)
        return response.data

    } catch (err) {
 toast.error(err.response.data.message)
        console.log(err)

    }

}

export async function login({ email, password }) {

    try {

        const response = await api.post("/api/auth/login", {
            email, password
        })
     toast.success(response.data.message)
        return response.data

    } catch (err) {
        console.log(err.response.data)
        toast.error(err.response.data.message)
    }

}

export async function logout() {
    try {

        const response = await api.get("/api/auth/logout")
 toast.success(response.data.message)
        return response.data

    } catch (err) {
 toast.err(err.response.data.message)
    }
}

export async function getMe() {

    try {

        const response = await api.get("/api/auth/get-me")

        return response.data

    } catch (err) {
        console.log(err)
    }

}