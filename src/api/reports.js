import axios from 'axios';

const instance = axios.create({
    baseURL: '/api/reports',
    timeout: 1000,
});

const searchReports = async (keyword) => {
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

export {searchReports};