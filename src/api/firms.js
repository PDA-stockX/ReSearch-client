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

const fetchReturnRateRank = async () => {
    try {
        const response = await instance.get("/return-rate");
        return response.data;
    } catch (err) {
        throw err;
    }
};

const fetchAchievementScoreRank = async () => {
    try {
        const response = await instance.get("/achievement-score");
        return response.data;
    } catch (err) {
        throw err;
    }
};

const fetchLikeRank = async () => {
    try {
        const response = await instance.get("/like-rank");
        return response.data;
    } catch (err) {
        throw err;
    }
};

export { searchFirms, fetchReturnRateRank, fetchAchievementScoreRank, fetchLikeRank };