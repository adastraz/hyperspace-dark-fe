import axios from 'axios';

const axiosWithAuth = () => {
    return axios.create({
        //config object
        baseURL: 'https://api.twitch.tv/helix/streams',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('twitchaccess')}`,
            'Client-Id': 'amol2krldkit04bof1iy4h9z5dwcpi'
        }
    })
}
export default axiosWithAuth
