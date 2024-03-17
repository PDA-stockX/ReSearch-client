import axios from 'axios';

const instance = axios.create({
    baseURL: '/api/users',
    timeout: 1000,
});

const login = async (email, password) => {
    try {
        const response = await instance.post('/login', {
            email,
            password,
        });
        return response.data;
    } catch (err) {
        throw err;
    }
}

const logout = async () => {
    try {
        instance.interceptors.request.use(
            config => {
                config.headers.Authorization = getAuthContext().token;
                return config;
            },
            (error) => {
                return Promise.reject(error);
            });
        const response = await instance.get('/logout');
        return response.data;
    } catch (err) {
        throw err;
    }
}

const signUp = async (email, password, name, nickname) => {
    try {
        const response = await instance.post('/sign-up', {
            email,
            password,
            name,
            nickname,
        });
        return response.data;
    } catch (err) {
        throw err;
    }
}

function getAuthContext() {
    const localData = localStorage.getItem('authContext');
    return localData ? JSON.parse(localData) : {
        isAuthenticated: false,
        token: null,
        user: null,
    };
}

export {login, logout, signUp};