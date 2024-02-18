import {useMemo} from 'react';
import axios from 'axios';
import {useAuth} from '@clerk/clerk-react';

const useClient = () => {
    const { getToken } = useAuth();

     // Re-create the instance only if getToken changes
    return useMemo(() => {
        const instance = axios.create({
            baseURL: `${import.meta.env.VITE_SERVER_URL}/`, // Set your API base URL here
            // additional configuration if needed
        });

        // Request interceptor to inject the auth token into headers
        instance.interceptors.request.use(async (config) => {
            const token = await getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
                config.headers['Content-Type'] = 'application/json';
                config.headers['Accept'] = 'application/json';
                config.headers['Access-Control-Allow-Origin'] = '*';
                config.withCredentials = true;
            }
            return config;
        }, (error) => {
            return Promise.reject(error);
        });

        return instance;
    }, [getToken]);
};

export default useClient;