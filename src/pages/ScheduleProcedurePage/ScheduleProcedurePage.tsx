import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../../contexts/SettingsContext";
import { IAgendamentos } from "../../@types/interfaces";
import LoadingScreen from "../../components/animations/LoadingScreen/LoadingScreen";
import PageContainer from "../../components/containers/PageContainer";
import useApi from "../../hooks/useApi";
import trashCan from "../../assets/trashCan.svg"
import whatsappIcon from "../../assets/whatsappIcon.svg"
import rightArrow from "../../assets/rightArrow.svg";
import ActionButton from "../../components/buttons/ActionButton";


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
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentAgendamentos = agendamentos.slice(indexOfFirstItem, indexOfLastItem);

    const paginateNext = () => {
        if (indexOfLastItem < agendamentos.length) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };
    
    const paginatePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <section className="border border-red w-full flex flex-col duration-300">
        <div className="flex justify-between items-end">
            <h2 className="font-semibold text-stc-blue text-[20px] ">Próximos Agendamentos</h2>
            <div className="flex justify-center mt-4">
                <button onClick={paginatePrevious} disabled={currentPage === 1}
                    className="bg-stc-blue mr-2  disabled:bg-gray-100 hover:brightness-90 px-4 py-2 rounded-l"
                >
                    <img className="rotate-180" src={rightArrow} alt="" />
                </button>
                <button onClick={paginateNext} disabled={indexOfLastItem >= agendamentos.length}
                    className="bg-stc-blue disabled:bg-gray-100 hover:brightness-90 px-4 py-2 rounded-r"
                >
                    <img src={rightArrow} alt="" />
                </button>
            </div>
        </div>
        <AgendamentoHeader/>
        <div className="flex flex-col mt-4 gap-4">
            { currentAgendamentos.map( agendamento => (
                <Agendamento 
                    key={`${agendamento.agendamentoId}${agendamento.dataAgendamento}`} 
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
            <span className="px-8 basis-1/4 py-2">Paciente</span>
            <span className="px-8 basis-1/4 py-2">Data do Agendamento</span>
            <span className="px-8 basis-1/4 py-2">Horário</span>
            <span className="px-8 basis-1/4 py-2">Ações</span>
        </div>
    );
};


const Agendamento = ({agendamento, loadAgendamentos}: 
    {agendamento: IAgendamentos, loadAgendamentos: () => Promise<void> }) => {
    const [ expand, setExpand ] = useState<boolean>(false);
    const dataStyle = `basis-1/4 flex items-center px-8 text-gray-600 font-semibold` 

    const deleteAgendamento = () => {
        loadAgendamentos
    }
    console

    return (
        <div 
            onClick={ () => setExpand(prev=>!prev) }
            onMouseEnter={() => setExpand(true) }
            onMouseLeave={() => setExpand(false)}
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
                <span className={`basis-1/4 flex items-center px-8 gap-3 text-gray-600 font-semibold`}>
                    <ActionButton imgSource={trashCan} onClick={() => deleteAgendamento()} />
                    <ActionButton imgSource={whatsappIcon} onClick={() => {}} />
                </span>
            </div>
            <div className={`${expand ? 'h-[90px] py-2 border-t-[3px] ' : "h-[0px]"} w-full bg-gray-100   
                duration-200 flex items-center justify-around`}>
                <div className={`flex basis-1/4 pl-8 flex-col ${ !expand && "hidden"}`}>
                    <span className="font-semibold  text-stc-orange-02 text-stc-orange-02 ">Profissional Responsável: </span>
                    <span>Dr.(a) {agendamento.profissional.nome}</span>
                </div>
                <div className={`flex basis-1/4 pl-8 flex-col ${ !expand && "hidden"}`}>
                    <span className="font-semibold  text-stc-orange-02 mr-2">Documento Paciente (CPF): </span>
                    <span>{agendamento.paciente.cpf}</span>
                </div>
                <div className={`flex basis-1/4 pl-8 flex-col ${ !expand && "hidden"}`}>
                    <span className="font-semibold  text-stc-orange-02 mr-2">Procedimento: </span>
                    <span> {agendamento.procedimento.nome}</span>
                </div>
                <div className={`flex basis-1/4 pl-8 flex-col ${ !expand && "hidden"}`}>
                    <div className={`flex  ${ !expand && "hidden"}`}>
                        <span className="font-semibold  text-stc-orange-02 mr-2">Tipo:{" "} </span>
                        <span>{" "}{agendamento.procedimento.nome.includes('onsult') ?
                        "Consulta Médica" :  " Exames Laboratoriais"  
                        }
                        </span>
                    </div>
                    <div className={`flex  ${ !expand && "hidden"}`}>
                    <span className="font-semibold  text-stc-orange-02 mr-2">Agendado em: </span>
                    <span>{agendamento.dataCriacao}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ScheduleProcedurePage;