export interface IPatient {
    id: number,
    nome: string,
    dataNasc: Date | string,
    cpf: string,
    status: "ativo" | "inativo"
}

export interface IPatientsPayload { 
    total: number
    patients: IPatient[], 
    next: boolean, 
    previous: boolean
}

export interface IPatientsTable {
    setPatientSelected: React.Dispatch<React.SetStateAction<IPatient | null>>, 
    patientsList: IPatientsPayload,
    loadPatients: (currPage?: number) => Promise<void>
}

export interface IRequestFormSection {
    patientSelected: IPatient | null,
    setPatientSelected: (patientSelected: IPatient | null) => void,
}

export interface IAgendamentoPayload {
    dataAgendamento: string,
    pacienteId: number,
    procedimentoId: number,
    profissionalId: number
}

export interface IAgendamentos {
    agendamentoId: number,
    dataAgendamento: string,
    dataCriacao: string,
    paciente: {
        id: number,
        nome: string,
        cpf: string
    },
    profissional: {
        id: number,
        nome: string
    },
    procedimento: {
        id: number,
        nome: string
    }
}