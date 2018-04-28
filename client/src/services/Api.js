import axios from 'axios';

// Set config defaults when creating the instance
export default () => {
    return axios.create({
        baseURL: `http://localhost:8080/`
    })
}