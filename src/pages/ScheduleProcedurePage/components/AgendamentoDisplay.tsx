import { IAgendamentos } from "../../../@types/interfaces";
import Agendamento from "./Agendamento";
import AgendamentoHeader from "./AgendamentoHeader";
import rightArrow from "../../../assets/rightArrow.svg"
import { useState } from "react";

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
                        className="bg-stc-blue mr-2 disabled:bg-gray-100 hover:brightness-90 h-[30px] w-[30px] px-2 py-1 rounded-l"
                    >
                        <img className="rotate-180" src={rightArrow} alt="" />
                    </button>
                    <button onClick={paginateNext} disabled={indexOfLastItem >= agendamentos.length}
                        className="bg-stc-blue disabled:bg-gray-100 hover:brightness-90 h-[30px] w-[30px] px-2 py-1 rounded-r"
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

export default AgendamentosDisplay;