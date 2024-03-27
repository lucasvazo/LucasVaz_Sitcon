import trashCan from "../../assets/trashCan.svg"
import useApi from "../../hooks/useApi";
import useCustomToast from "../../hooks/useCustomToast";
import MainButton from "../buttons/MainButton";

const DeleteModal = ( { deleteId, setDeleteId } : 
    { deleteId: number | null, setDeleteId: (deleteId: number | null) => void}) => {

    const { deleteAgendamento } = useApi();
    const { showSuccessToast } = useCustomToast();

    const confirmDeletion = async () => {
        const deletedAgendamento = await deleteAgendamento(deleteId!);
        if (deletedAgendamento) {
        showSuccessToast('Agendamento excluído com sucesso.')
            setTimeout(() => {
                setDeleteId(null);
            }, 1500)
        }
    }

    return (
        <>
            <div className="absolute bg-gray-300 w-[450px] h-fit z-[251] top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 px-6 py-4 rounded-[12px] flex flex-col text-[20px]">
                <div className="flex gap-4 border-b border-gray-400 items-start pb-2">
                    <img src={trashCan} alt="trashcan" />
                    <span className="font-semibold w-full">Cancelar Agendamento</span>
                </div>
                <span className="text-[18px] py-8 text-center font-normal">
                    Você tem certeza? Essa ação é irreversível.
                </span>
                <div className="flex justify-end gap-2">
                    <MainButton onClick={() => setDeleteId(null)} title="Cancelar" variant="blueOutlined"  />
                    <MainButton onClick={() => confirmDeletion()} title="Confirmar" variant="orangeFilled"  />
                </div>
            </div>
            <div 
            className="fixed bg-[#000000] animate-modalOverlayAppear opacity-80 bg-pgray1 z-[250] top-0 left-0 right-0 bottom-0" 
            onClick={() => setDeleteId(null)}
        />
        </>
    )
}

export default DeleteModal;