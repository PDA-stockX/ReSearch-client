import axios from 'axios';

const instance = axios.create({
    baseURL: '/api/reportSector',
    timeout: 1000,
});

const fetchReportSectors = async () => {
        try {
            const response = await instance.get('/');
            return response.data
        } catch (err) {
            throw err;
        }
    }

export {fetchReportSectors};