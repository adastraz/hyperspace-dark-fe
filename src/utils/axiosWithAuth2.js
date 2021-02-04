import axios from 'axios'

const axiosWithAuth2 = () => {
    return axios.create({
        baseURL: 'http://localhost:3300/',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}
export default axiosWithAuth2