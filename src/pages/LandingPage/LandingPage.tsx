import NavigationLink from "../../components/buttons/NavigationLink";
import PageHeader from "../../components/headers/PageHeader";
import { Outlet } from "react-router-dom";
import PageContainer from "../../components/containers/PageContainer";

const LandingPage = () => {
    return (
        <div className="min-h-[100vh] bg-stc-gray-01">
            <PageHeader>
                <PageContainer extraStyles="flex items-center justify-end gap-6">
                    <NavigationLink description="Solicitações Clínicas" to="/" />
                    <NavigationLink description="Listagem de Solicitações" to="/procedures" />
                </PageContainer>
            </PageHeader>
            <Outlet/>
            <div className="min-h-[150px] w-full bg-stc-light-blue mt-8
                font-semibold flex items-center justify-center text-stc-blue">
                Candidato: Lucas Vaz Nascimento - SITCON
            </div>
        </div>
    );
};

export default LandingPage;