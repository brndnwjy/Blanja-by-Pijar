import axios from "axios";
import { createBrowserHistory } from "history";

const axiosApiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BACKEND
})

axiosApiInstance.interceptors.request.use(function(config){
    const token = localStorage.getItem('token')
    if(token){
        config.headers = {
            Authorization: `Bearer ${token}`
        }
    }
    return config
}, function(error){
    return Promise.reject(error)
})

axiosApiInstance.interceptors.request.use(function(response){
    return response
}, function(error){
    if(error.response.status === 400 && error.response.data.message === 'invalid token'){
        const history = createBrowserHistory()
        history.push('/customerLogin')
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
    }
    return Promise.reject(error)
})

export default axiosApiInstance