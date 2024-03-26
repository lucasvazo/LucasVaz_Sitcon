export interface IPatient {
    id: number,
    nome: string,
    dataNasc: Date | string,
    cpf: string,
    status: "ativo" | "inativo"
}

export interface IPatientsPayload { 
    patients: IPatient[], 
    next: boolean, 
    previous: boolean
}