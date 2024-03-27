import axios from 'axios';
import { IAgendamentoPayload } from '../@types/interfaces';

const useApi = () => {

    const BASE_URL = 'http://localhost:3000'
    const api = axios.create({
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json"
        }
    });

    const getPatients = async (currentPage: number = 1) => {
        try {
            const {data: allPatients} = await api.get(`/pacientes?page_size=10&page=${currentPage}`);
            return allPatients;
        } catch (error) {
            return false;
        }
    }

    const getProfessionals = async () => {
        try {
            const {data: allProfessionals} = await api.get(`/profissionais`);
            const profissionaisArray = allProfessionals.map( (prof: any) => (
                {
                    id: prof.id,
                    nome: prof.nome
                }
            ))
            return profissionaisArray;
        } catch (error) {
            return false;
        }
    }

    const getProceduresByProfessionalId = async (professionalId: number) => {
        try {
            const { data: procedures } = await api.get(`/solicitacao?professionalId=${professionalId}`);
            return procedures;
        } catch (error) {
            return false;
        }
    }

    const postNewAgendamento = async ( agendamento: IAgendamentoPayload ) => {
        try {
            const { data: newAgendamento } = await api.post(`/solicitacao`, agendamento);
            return newAgendamento;
        } catch (error) {
            return false;
        }
    }

    return { 
        getPatients, 
        getProfessionals, 
        postNewAgendamento,
        getProceduresByProfessionalId 
    };
};

export default useApi;