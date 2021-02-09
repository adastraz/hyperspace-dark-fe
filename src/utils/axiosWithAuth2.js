import axios from 'axios'

const axiosWithAuth2 = () => {
    return axios.create({
        baseURL: 'https://hdsocial.herokuapp.com/',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}
export default axiosWithAuth2