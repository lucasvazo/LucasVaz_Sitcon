import LoadingScreen from "../../components/animations/LoadingScreen/LoadingScreen";
import PageContainer from "../../components/containers/PageContainer";
import useApi from "../../hooks/useApi";
import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../../contexts/SettingsContext";
import { IAgendamentos } from "../../@types/interfaces";


const ScheduleProcedurePage = () => {
    const [ agendamentos, setAgendamentos ] = useState<IAgendamentos[]>([]);
    const { loadingScreen, setLoadingScreen } = useContext(SettingsContext);
    const { getAllAgendamentos } = useApi();

    const loadAgendamentos = async () => {
        const agendamentos = await getAllAgendamentos();
        setAgendamentos([...agendamentos]);
        setLoadingScreen(false);
    };

    useEffect(() => {
        setLoadingScreen(true)
        loadAgendamentos()
    }, []);

    return (
        <>
            <PageContainer extraStyles="mt-8">
                <AgendamentosDisplay 
                    agendamentos={agendamentos} 
                    loadAgendamentos={loadAgendamentos} 
                />
            </PageContainer>
            { loadingScreen && <LoadingScreen/>}
        </>
    );
};


const AgendamentosDisplay = ( {agendamentos, loadAgendamentos} : 
    {agendamentos: IAgendamentos[], loadAgendamentos: () => Promise<void>}) => {
    return (
        <section className="border border-red w-full flex flex-col duration-300">
            <h2 className="font-semibold text-stc-blue text-[20px] ">Próximos Agendamentos</h2>
            <AgendamentoHeader/>
            <div className="flex flex-col mt-4 gap-4">
                { agendamentos.map( agendamento => (
                    <Agendamento 
                        key={agendamento.dataAgendamento} 
                        agendamento={agendamento} 
                        loadAgendamentos={loadAgendamentos} 
                    />
                ))}
            </div>
        </section>
    );
};


const AgendamentoHeader = () => {
    return (
        <div 
            className="flex justify-between mt-4 rounded-tl-[14px] rounded-tr-[14px]
            font-semibold text-stc-white bg-stc-blue shadow-md mb-2 h-[55px] flex items-center"
        >
            <span className="text-center basis-1/4 py-2">Paciente</span>
            <span className="text-center basis-1/4 py-2">Data do Agendamento</span>
            <span className="text-center basis-1/4 py-2">Horário</span>
            <span className="text-center basis-1/4 py-2">Ações</span>
        </div>
    );
};


const Agendamento = ({agendamento, loadAgendamentos}: 
    {agendamento: IAgendamentos, loadAgendamentos: () => Promise<void> }) => {
    const [ expand, setExpand ] = useState<boolean>(false);
    const dataStyle = `basis-1/4 flex items-center 
    justify-center text-gray-600 font-semibold` 

    const deleteAgendamento = () => {
        loadAgendamentos
    }
    console

    return (
        <div 
            className="shadow-md w-full bg-gray-100 hover:bg-stc-light-blue
            relative overflow-hidden rounded-lg"
        >
            <div 
            onClick={ () => setExpand(prev=>!prev) }
            className="flex h-[55px]">
                <span className={dataStyle}>
                    {agendamento.paciente.nome}
                </span>
                <span className={dataStyle}>
                    {agendamento.dataAgendamento.split(" ")[0]}
                </span>
                <span className={dataStyle}>
                    {agendamento.dataAgendamento.split(" ")[1]}
                </span>
                <span className={dataStyle}>
                    {agendamento.paciente.nome}
                </span>
            </div>
            <div className={`${expand ? 'h-[70px] py-2' : "h-[0px]"} w-full bg-gray-100 gap-8  
                border-t-[3px] border-red duration-200 flex items-start justify-around`}>
                <div className={`flex flex-col ${ !expand && "hidden"}`}>
                    <span className="font-semibold  text-stc-orange-02 text-stc-orange-02 ">Profissional Responsável: </span>
                    <span>Dr.(a) {agendamento.profissional.nome}</span>
                </div>
                <div className={`flex flex-col ${ !expand && "hidden"}`}>
                    <div className={`flex  ${ !expand && "hidden"}`}>
                        <span className="font-semibold  text-stc-orange-02 mr-2">Documento Paciente (CPF): </span>
                        <span>{agendamento.paciente.cpf}</span>
                    </div>
                    <div className={`flex  ${ !expand && "hidden"}`}>
                        <span className="font-semibold  text-stc-orange-02 mr-2">Agendado em: </span>
                        <span>{" "}{agendamento.dataCriacao}</span>
                    </div>
                </div>
                <div className={`flex flex-col ${ !expand && "hidden"}`}>
                    <div className={`flex  ${ !expand && "hidden"}`}>
                        <span className="font-semibold  text-stc-orange-02 mr-2">Tipo de Procedimento:{" "} </span>
                        <span>{" "}{agendamento.procedimento.nome.includes('onsult') ?
                        "Consulta Médica" :  " Exames Laboratoriais"  
                        }
                        </span>
                    </div>
                    <div className={`flex  ${ !expand && "hidden"}`}>
                        <span className="font-semibold  text-stc-orange-02 mr-2">Procedimento: </span>
                        <span> {agendamento.procedimento.nome}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};








export default ScheduleProcedurePage;