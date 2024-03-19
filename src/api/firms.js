import axios from 'axios';

const instance = axios.create({
    baseURL: '/api/firms',
    timeout: 1000,
});

const searchFirms = async (keyword) => {
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

export {searchFirms};