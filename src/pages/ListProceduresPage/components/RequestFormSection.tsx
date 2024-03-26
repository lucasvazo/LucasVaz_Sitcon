import { ReactNode } from "react";
import { IRequestFormSection } from "../../../@types/interfaces";
import MainButton from "../../../components/buttons/MainButton";
import TextInput from "../../../components/inputs/TextInput";
import DropdownInput from "../../../components/inputs/DropdownInput";


const RequestFormSection = ({ patientSelected, setPatientSelected } : IRequestFormSection) => {

    return (
        <form className="flex flex-col gap-4">
            <MainButton onClick={() => setPatientSelected(null)} variant={"blueOutlined"} title="Voltar" />
            <ReqFormRow>
                <TextInput readonly disabled styles="basis-1/3" defaultValue={patientSelected!.nome} name="patientName" label="Nome do Paciente" />
                <TextInput readonly disabled styles="basis-1/3" defaultValue={patientSelected!.dataNasc.toString()} name="patientBirth" label="Data de Nascimento" />
                <TextInput readonly disabled styles="basis-1/3" defaultValue={patientSelected!.cpf} name="patientCPF" label="CPF" />
            </ReqFormRow>
            <Warning/>
            <ReqFormRow>
                <DropdownInput 
                    placeholder="Selecione..." 
                    options={[{id:1, nome: "juca"}, { id:2, nome: "luiza"}]} 
                    styles="w-full" 
                    label="Profissional *" />
            </ReqFormRow>
        </form>
    );
};

const ReqFormRow = ({children, extraStyles} : {children: ReactNode, extraStyles?: string}) => {
    return (
        <div className={`flex h-[91px] gap-8 ${extraStyles}`}>
            {children}
        </div>
    );
};

const Warning = () => (
    <div className="bg-stc-orange-01 h-[62px] flex gap-2
        items-center justify-center cursor-default my-2">
        <span className="font-bold">Atenção!</span>
        <span>Os Campos com * devem ser preechidos obrigatóriamente.</span>
    </div>
)

export default RequestFormSection;