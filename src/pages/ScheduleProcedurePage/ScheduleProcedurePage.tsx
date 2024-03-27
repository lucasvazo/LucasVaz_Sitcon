import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../../contexts/SettingsContext";
import { IAgendamentos } from "../../@types/interfaces";
import AgendamentosDisplay from "./components/AgendamentoDisplay";
import LoadingScreen from "../../components/animations/LoadingScreen/LoadingScreen";
import PageContainer from "../../components/containers/PageContainer";
import useApi from "../../hooks/useApi";
import { ToastContainer } from "react-toastify";


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
            <ToastContainer position="bottom-left" theme={"light"} />
        </>
    );
};


export default ScheduleProcedurePage;