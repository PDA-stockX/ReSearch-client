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

// 애널리스트 수익률 순위 조회
const fetchReturnRateRank = async () => {
    try {
        const response = await instance.get('/return-rate');
        return response
    } catch (err) {
        throw err;
    }
}

// 애널리스트 달성률 순위 조회
const fetchAchievementScoreRank = async () => {
    try {
        const response = await instance.get('/achievement-score');
        return response
    } catch (err) {
        throw err;
    }
}

// 업종별 애널리스트 순위 조회
const fetchSectorRank = async (sectorName) => {
    try {
        const response = await instance.get('/', {
            params: {
                sectorName
            }
        })
        return response
    } catch (err) {
        throw err;
    }
}

// 애널리스트 즐겨찾기 순위 조회
const fetchFollowerRank = async () => {
    try {
        const response = await instance.get('/follwer-rank')
        return response
    } catch (err) {
        throw err;
    }
}



export {searchAnalysts, fetchReturnRateRank, fetchAchievementScoreRank, fetchSectorRank, fetchFollowerRank };