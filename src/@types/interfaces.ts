export interface IPatient {
    nome: string,
    dataNasc: Date | string,
    cpf: string,
    status: "ativo" | "inativo"
}