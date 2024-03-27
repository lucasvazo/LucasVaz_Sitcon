import { useState } from "react";
import { IAgendamentos } from "../../../@types/interfaces";
import ActionButton from "../../../components/buttons/ActionButton";
import trashCan from "../../../assets/trashCan.svg"
import whatsappIcon from "../../../assets/whatsappIcon.svg"

const Agendamento = ({agendamento, loadAgendamentos}: 
    {agendamento: IAgendamentos, loadAgendamentos: () => Promise<void> }) => {
    const [ expand, setExpand ] = useState<boolean>(false);
    const dataStyle = `basis-1/4 flex items-center px-8 text-gray-600 font-semibold` 

    const deleteAgendamento = () => {
        loadAgendamentos()
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

export default Agendamento;
