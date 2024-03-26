import PageContainer from "../../components/containers/PageContainer";
import MainButton from "../../components/buttons/MainButton";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { IPatient, IPatientsPayload } from "../../@types/interfaces";
import PatientsSection from "./components/PatientsSection";

const ListProceduresPage = () => {

    const { getPatients } = useApi();

    const [ patientSelected, setPatientSelected ] = useState<IPatient | null>(null);
    const [ patientsList, setPatientsList ] = useState<IPatientsPayload>({ patients: [], next: true, previous: false, total: 10 });

    const loadPatients = async ( currPage: number = 1 ) => {
        const allPatients = await getPatients(currPage);
        setPatientsList({ 
            patients: [...allPatients.data], 
            next: allPatients.next > 0 ? true : false,
            previous: allPatients.previous > 0 ? true : false,
            total: allPatients.total
        });
    };

    useEffect(() => {
        loadPatients();
    }, []);

    return (
        <PageContainer extraStyles="mt-8">
            {
                patientSelected
                ?
                <MainButton onClick={() => setPatientSelected(null)} variant={"orangeFilled"} title="Voltar" />
                :
                <PatientsSection 
                    setPatientSelected={setPatientSelected} 
                    patientsList={patientsList} 
                    loadPatients={loadPatients}
                />
                    
            }
        </PageContainer>
    );
};

export default ListProceduresPage;