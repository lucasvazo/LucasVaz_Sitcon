import NavigationLink from "../../components/buttons/NavigationLink";
import PageHeader from "../../components/headers/PageHeader";
import { Outlet } from "react-router-dom";
import PageContainer from "../../components/containers/PageContainer";

const LandingPage = () => {
    return (
        <div className="h-full border border-[red]">
            <PageHeader>
                <PageContainer extraStyles="flex items-center justify-end gap-6">
                    <NavigationLink description="Solicitações Clínicas" to="/" />
                    <NavigationLink description="Listagem de Solicitações" to="/procedures" />
                </PageContainer>
            </PageHeader>
            <Outlet/>
        </div>
    );
};

export default LandingPage;