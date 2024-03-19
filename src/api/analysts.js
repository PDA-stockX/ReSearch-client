import axios from 'axios';

const instance = axios.create({
    baseURL: '/api/analysts',
    timeout: 1000,
});

const searchAnalysts = async (keyword) => {
    try {
        const response = await instance.get('/search', {
            params: {
                keyword,
            }
        });
        return response.data;
    } catch (err) {
        throw err;
    }
}

export {searchAnalysts};