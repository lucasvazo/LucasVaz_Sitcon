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

export default AgendamentoHeader;