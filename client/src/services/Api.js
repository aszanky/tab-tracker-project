import axios from 'axios';

// Set config defaults when creating the instance
export default () => {
    return axios.create({
        // URL your API
        baseURL: `http://localhost:8080/`
    });
};
