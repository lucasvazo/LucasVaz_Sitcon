import { ReactNode, useEffect, useState } from "react";
import { IRequestFormSection } from "../../../@types/interfaces";
import MainButton from "../../../components/buttons/MainButton";
import TextInput from "../../../components/inputs/TextInput";
import DropdownInput from "../../../components/inputs/DropdownInput";
import useApi from "../../../hooks/useApi";


const RequestFormSection = ({ patientSelected, setPatientSelected } : IRequestFormSection) => {

    const [ professionalOptions, setProfessionalOptions ] = useState<{id: number, nome: string}[]>([{id: -1, nome: 'Selecione um profissional...'}]);
    const [ solicitacaoOptions, setSolicitacaoOptions ] = useState<{id: number, nome: string}[]>([{id: -1, nome: 'Selecione um tipo de solicitação...'}]);
    const [ procedurelOptions, setProcedurelOptions ] = useState<{id: number, nome: string}[]>([{id: -1, nome: 'Selecione um profissional...'}]);
    const [ selectedProcedure, setSelectedProcedure ] = useState<number>(0);
    const [ selectedProfessional, setSelectedProfessional ] = useState<number>(0);
    const [ selectedSolicitation, setSelectedSolicitation ] = useState<number>(0);

    const {  getProfessionals, getProceduresByProfessionalId } = useApi();

    const loadProfessionals = async () => {
        const profArray = await getProfessionals()
        setProfessionalOptions([...profArray])
    };

    const loadTypesOfProcedures = async (professionalId: number) => {
        const { professionalProcedures } = await getProceduresByProfessionalId(professionalId);
        const tiposSolicitacaoArray: any[] = [];
        const tiposSolicitacaoIds: number[] = [];
        professionalProcedures.forEach( (procedure: any) => {
            const typeId = procedure.tipoSolicitacao.id;
            const typeDescription = procedure.tipoSolicitacao.descricao;
            if (!tiposSolicitacaoIds.includes(typeId)){
                tiposSolicitacaoIds.push(typeId)
                tiposSolicitacaoArray.push({id: typeId, nome: typeDescription})
            }
        })
        setSolicitacaoOptions([...tiposSolicitacaoArray])
    };

    const loadProceduresByType = async (professionalId: number, typeId: number) => {
        const { professionalProcedures } = await getProceduresByProfessionalId(professionalId);
        const availableProcedures = professionalProcedures
            .filter( (procedure: any) => procedure.tipoSolicitacao.id === typeId )
            .map( (procedure: any) => ({ id: procedure.id, nome: procedure.descricao }) );
        setProcedurelOptions([...availableProcedures]);
    };

    useEffect(() => {
        loadProfessionals()
    }, []);

    useEffect(() => {
        if (selectedProfessional) {
            loadTypesOfProcedures(selectedProfessional)
        }
    }, [selectedProfessional]);

    useEffect(() => {
        if (selectedSolicitation) {
            loadProceduresByType(selectedProfessional, selectedSolicitation)
        }
    }, [selectedSolicitation]);

    return (
        <form className="flex flex-col gap-4 whitespace-nowrap">
            <MainButton onClick={() => setPatientSelected(null)} variant={"blueOutlined"} title="Voltar" />
            <ReqFormRow>
                <TextInput readonly disabled styles="basis-1/3" 
                    defaultValue={patientSelected!.nome} name="patientName" label="Nome do Paciente" />
                <TextInput readonly disabled styles="basis-1/3" 
                    defaultValue={patientSelected!.dataNasc.toString()} name="patientBirth" label="Data de Nascimento" />
                <TextInput readonly disabled styles="basis-1/3" 
                    defaultValue={patientSelected!.cpf} name="patientCPF" label="CPF" />
            </ReqFormRow>
            <Warning/>
            <ReqFormRow>
                <DropdownInput 
                    setId={setSelectedProfessional}
                    placeholder="Selecione..." 
                    options={professionalOptions} 
                    styles="w-full" 
                    label="Profissional *" />
            </ReqFormRow>
            <ReqFormRow>
                <DropdownInput 
                    setId={setSelectedSolicitation}
                    disabled={ selectedProfessional ? false : true}
                    placeholder="Selecione..." 
                    options={solicitacaoOptions} 
                    styles="w-full" 
                    label="Tipo de Solicitação *" />
                <DropdownInput 
                    setId={setSelectedProcedure}
                    disabled={selectedSolicitation ? false : true}
                    placeholder="Selecione..." 
                    options={procedurelOptions} 
                    styles="w-full" 
                    label="Procedimentos *" />
            </ReqFormRow>
            <ReqFormRow extraStyles="flex justify-end mt-2">
                <MainButton 
                    disabled={
                        !selectedProcedure ||
                        !selectedProfessional ||
                        !selectedSolicitation
                    }
                    onClick={() => {}} 
                    variant={"blueFilled"} 
                    title="Salvar" 
                    type="submit"
                />
            </ReqFormRow>
        </form>
    );
};

const ReqFormRow = ({children, extraStyles} : {children: ReactNode, extraStyles?: string}) => {
    return (
        <div className={`flex h-[91px] gap-8 ${extraStyles}`}>
            {children}
        </div>
    );
};

const Warning = () => (
    <div className="bg-stc-orange-01 h-[62px] flex gap-2 rounded-[12px]
        items-center justify-center cursor-default my-2 whitespace-normal
        text-center">
        <span className="font-bold">Atenção!</span>
        <span>Os Campos com * devem ser preechidos obrigatóriamente.</span>
    </div>
)

export default RequestFormSection;