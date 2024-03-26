import axios from 'axios';

const useApi = () => {

    const BASE_URL = 'http://localhost:3000'
    const api = axios.create({
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json"
        }
    });

    const getPatients = async () => {
        try {
            const {data: allPatients} = await api.get('/pacientes');
            return allPatients;
        } catch (error) {
            return false;
        }
    }

    return { getPatients };
};

export default useApi;