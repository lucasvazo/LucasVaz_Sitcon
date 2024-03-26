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