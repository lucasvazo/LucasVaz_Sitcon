import { IPatient, IRequestFormSection } from "../../../@types/interfaces";
import MainButton from "../../../components/buttons/MainButton";


const RequestFormSection = ({ patientSelected, setPatientSelected } : IRequestFormSection) => {

    


    return (
        <section>
                <MainButton onClick={() => setPatientSelected(null)} variant={"blueOutlined"} title="Voltar" />

        </section>
    );
};

export default RequestFormSection;