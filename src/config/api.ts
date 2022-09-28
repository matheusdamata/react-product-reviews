import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export default {

    getReviews: async () => {
        let response = await axios.get(`${BASE_URL}/reviews`);
        return response.data;
    }

}