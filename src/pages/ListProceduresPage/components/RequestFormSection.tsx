import { useContext, useEffect, useState } from "react";
import { IAgendamentoPayload, IRequestFormSection } from "../../../@types/interfaces";
import MainButton from "../../../components/buttons/MainButton";
import TextInput from "../../../components/inputs/TextInput";
import DropdownInput from "../../../components/inputs/DropdownInput";
import useApi from "../../../hooks/useApi";
import DateInput from "../../../components/inputs/DateInput";
import TimeInput from "../../../components/inputs/TimeInput";
import useUtils from "../../../hooks/useUtils";
import { ReqFormRow, Warning } from "../../../components/containers/ReqFormRow";
import { SettingsContext } from "../../../contexts/SettingsContext";
import useCustomToast from "../../../hooks/useCustomToast";


const RequestFormSection = ({ patientSelected, setPatientSelected } : IRequestFormSection) => {

    const [ professionalOptions, setProfessionalOptions ] = useState<{id: number, nome: string}[]>([{id: -1, nome: 'Selecione um profissional...'}]);
    const [ solicitacaoOptions, setSolicitacaoOptions ] = useState<{id: number, nome: string}[]>([{id: -1, nome: 'Selecione um tipo de solicitação...'}]);
    const [ procedurelOptions, setProcedurelOptions ] = useState<{id: number, nome: string}[]>([{id: -1, nome: 'Selecione um procedimento...'}]);
    const [ selectedProcedure, setSelectedProcedure ] = useState<number>(0);
    const [ selectedProfessional, setSelectedProfessional ] = useState<number>(0);
    const [ selectedSolicitation, setSelectedSolicitation ] = useState<number>(0);
    const [ timeAndDate, setTimeAndDate ] = useState<{time: string | null, date: Date | null}>( {time: null, date: null}) ;

    const { getProfessionals, getProceduresByProfessionalId, postNewAgendamento } = useApi();
    const { formatDateTime } = useUtils();
    const { showSuccessToast } = useCustomToast();

    const { setLoadingScreen } = useContext(SettingsContext);

    const loadProfessionals = async () => {
        const profArray = await getProfessionals()
        setProfessionalOptions([...profArray])
        setLoadingScreen(false)
    };

    const loadTypesOfProcedures = async (professionalId: number) => {
        const { professionalProcedures } = await getProceduresByProfessionalId(professionalId);
        const tiposSolicitacaoArray: any[] = [];
        const tiposSolicitacaoIds: number[] = [];
        professionalProcedures.forEach( (procedure: any) => {
            const typeId = procedure.tipoSolicitacao.id;
            const typeDescription = procedure.tipoSolicitacao.descricao;
            if (!tiposSolicitacaoIds.includes(typeId)){
                tiposSolicitacaoIds.push(typeId);
                tiposSolicitacaoArray.push({id: typeId, nome: typeDescription});
            }
        })
        setSolicitacaoOptions([...tiposSolicitacaoArray]);
        setLoadingScreen(false)
    };

    const loadProceduresByType = async (professionalId: number, typeId: number) => {
        const { professionalProcedures } = await getProceduresByProfessionalId(professionalId);
        const availableProcedures = professionalProcedures
            .filter( (procedure: any) => procedure.tipoSolicitacao.id === typeId )
            .map( (procedure: any) => ({ id: procedure.id, nome: procedure.descricao }) );
        setProcedurelOptions([...availableProcedures]);
        setLoadingScreen(false)
    };

    const createAgendamento = async ( e: React.FormEvent<HTMLFormElement> ) => {
        setLoadingScreen(true);
        e.preventDefault();
        if (timeAndDate.date && timeAndDate.time) {
            const scheduledProcedure = formatDateTime({ date: timeAndDate.date , time: timeAndDate.time})
            const schedulePayload: IAgendamentoPayload = {
                dataAgendamento: scheduledProcedure,
                pacienteId: patientSelected!.id,
                procedimentoId: selectedProcedure,
                profissionalId: selectedProfessional
            }
            const submitPayload = await postNewAgendamento(schedulePayload);
            if (submitPayload) {
                setPatientSelected(null);
                
            }
        }
        setLoadingScreen(false)
        showSuccessToast('Procedimento agendado com sucesso.')
    }

    useEffect(() => {
        loadProfessionals()
    }, []);

    useEffect(() => {
        if (selectedProfessional) {
            setLoadingScreen(true)
            loadTypesOfProcedures(selectedProfessional)
        }
    }, [selectedProfessional]);

    useEffect(() => {
        if (selectedSolicitation) {
            setLoadingScreen(true)
            loadProceduresByType(selectedProfessional, selectedSolicitation)
        }
    }, [selectedSolicitation]);

    return (
        <form 
            onSubmit={createAgendamento} 
            className="flex flex-col gap-4 whitespace-nowrap"
        >
            <MainButton 
                onClick={() => setPatientSelected(null)} 
                variant={"blueOutlined"} 
                title="Voltar" 
            />
            <ReqFormRow>
                <TextInput 
                    readonly disabled styles="basis-1/3" 
                    defaultValue={patientSelected!.nome} 
                    name="patientName" label="Nome do Paciente" />
                <TextInput 
                    readonly disabled styles="basis-1/3" 
                    defaultValue={patientSelected!.dataNasc.toString()} 
                    name="patientBirth" label="Data de Nascimento" />
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
                <DateInput styles="basis-1/2" 
                    setTimeAndDate={setTimeAndDate}
                    name="appointmentDate" label="Data *" />
                <TimeInput styles="basis-1/2" 
                    setTimeAndDate={setTimeAndDate}
                    name="appointmentTime" label="Hora *" />
            </ReqFormRow>
            <ReqFormRow extraStyles="flex justify-end mt-2 -mb-12">
                <MainButton 
                    disabled={
                        !selectedProcedure ||
                        !selectedProfessional ||
                        !selectedSolicitation ||
                        !timeAndDate.date ||
                        !timeAndDate.time
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

export default RequestFormSection;