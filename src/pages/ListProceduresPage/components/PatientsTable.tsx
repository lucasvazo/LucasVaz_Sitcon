import { IPatient, IPatientsPayload } from "../../../@types/interfaces";
import MainButton from "../../../components/buttons/MainButton";

export interface IPatientsTable {
    setPatientSelected: React.Dispatch<React.SetStateAction<IPatient | null>>, 
    patientsList: IPatientsPayload,
    loadPatients: (currPage?: number) => Promise<void>
}

const PatientsTable = ({setPatientSelected, patientsList, loadPatients} : IPatientsTable) => {

    const formatDate = (dateString: string): string => {
        const [year, month, day] = dateString.split('-');
        return `${year}/${month}/${day}`;
    }

    return (
        <table className="w-full text-center shadow-md rounded-lg">
            <thead className="bg-stc-blue-02 h-[50px]">
                <tr className="bg-stc-blue text-white">
                <th className="px-4 py-2">Paciente</th>
                <th className="px-4 py-2">Nascimento</th>
                <th className="px-4 py-2">CPF</th>
                <th className="px-4 py-2">Ações</th>
                </tr>
            </thead>
            <tbody>
                {patientsList.patients
                    .filter((patient) => ( patient.status === 'ativo'))
                    .map((patient, index) => {
                        const isEvenRow = index >= 1 && (index - 1) % 2 === 0;
                        const rowClass = isEvenRow ? 'bg-stc-blue-02' : (patient.status === 'ativo' ? 'bg-white' : 'bg-gray-100');
                        return (
                            <tr key={patient.id} className={rowClass}>
                                <td className="px-4 py-2">{patient.nome}</td>
                                <td className="px-4 py-2">{formatDate(patient.dataNasc.toString())}</td>
                                <td className="px-4 py-2">{patient.cpf}</td>
                                <td className="px-4 py-2">
                                    <MainButton
                                        onClick={() => setPatientSelected(patient)}
                                        title="Prosseguir"
                                        variant="orangeFilled"
                                    />
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default PatientsTable;
