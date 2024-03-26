import React, { useEffect, useState } from 'react';
import { IPatientsTable } from '../../../@types/interfaces';
import MainButton from '../../../components/buttons/MainButton';
import SearchInput from '../../../components/inputs/SearchInput';
import Pagination from './Pagination';

const PatientsSection: React.FC<IPatientsTable> = ({ setPatientSelected, patientsList, loadPatients }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredPatients, setFilteredPatients] = useState(patientsList.patients);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const formatDate = (dateString: string): string => {
        const [year, month, day] = dateString.split('-');
        return `${year}/${month}/${day}`;
    };

    useEffect(() => {
        setFilteredPatients(patientsList.patients.filter((patient) =>
            patient.nome.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    }, [searchQuery, patientsList]);

    useEffect(() => {   
        loadPatients(currentPage);
    }, [currentPage]);

    useEffect(() => {
        setFilteredPatients(patientsList.patients);
    }, [patientsList]);

    return (
        <section>
            <div className="flex items-center justify-between mb-4">
                <SearchInput searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
            </div>
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
                    {filteredPatients.map((patient, index) => {
                        const isEvenRow = index >= 1 && (index - 1) % 2 === 0;
                        const rowClass = isEvenRow
                            ? 'bg-stc-blue-02'
                            : 'bg-stc-white'
                        return (
                            <tr key={patient.id} className={`${rowClass} hover:brightness-90`}>
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
            <Pagination setCurrentPage={setCurrentPage} total={patientsList.total} currentPage={currentPage} />
        </section>
    );
};

export default PatientsSection;
