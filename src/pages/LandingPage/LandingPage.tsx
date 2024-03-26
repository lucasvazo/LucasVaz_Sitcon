import PageHeader from "../../components/headers/PageHeader";
import { Outlet, NavLink } from "react-router-dom";


const LandingPage = () => {
    return (
        <div className="h-full">
            <PageHeader>
                <NavLink to={'/'}>Solicitações Clínicas</NavLink>
                <NavLink to={'/procedures'}>Listagem de Solicitações</NavLink>
            </PageHeader>
            <Outlet/>
        </div>
    );
};

export default LandingPage;