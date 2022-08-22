import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: {
                id: 1,
                name: 'Alisson',
                email: 'Alisson.souz.pa@gmail.com'
            },
        }
        // const response = await api.post('/validate', { token });
        // return response.data
    },
    signIn: async (email: string, password: string) => {
        return {
            user: {
                id: 1,
                name: 'Alisson',
                email: 'Alisson.souz.pa@gmail.com'
            },
            token: '123456'
        }
        // const response = await api.post('/signIn', { email, password });
        // return response.data;
    },
    logOut: async () => {
        return { status: true }
        // const response = await api.post('/logOut');
        // return response.data
    }
})