import axios from 'axios';

const api = axios.create({
    baseURL: 'https://clam-heroic-actually.ngrok-free.app/api/',
});

export default api;