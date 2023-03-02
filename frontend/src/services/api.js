import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:1234',
    withCredentials: true
})

export default axiosInstance