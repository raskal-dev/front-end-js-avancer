import axios from 'axios';
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Table, Tbody, Td, Th, Thead, Tr } from './Grid';

const GridAut = ({ autorisation, setAutorisation, setOnEdit }) => {
    const handleEdite = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id_aut) => {
        await axios.delete("http://localhost:3001/autorisation/delete/" + id_aut).then((data) => {
            const newArray = autorisation.filter((autorisation) => autorisation.id_aut !== id_aut);

            setAutorisation(newArray);
            toast.success(data);
        }).catch(({ data }) => toast.error(data));

        setOnEdit(null);
    };

  return (
    <Table>
        <Thead>
            <Tr>
                <Th>#</Th>
                <Th>Reférence</Th>
                <Th>Du</Th>
                <Th>Au</Th>
                <Th>Départ</Th>
                <Th>Arriver</Th>
                <Th>Nom</Th>
                <Th></Th>
                <Th></Th>
            </Tr>
        </Thead>
        <Tbody>
            {autorisation.map((item, i) => (
                <Tr key={i}>
                    <Td>{item.id_aut}</Td>
                    <Td>{item.ref_autorisation}</Td>
                    <Td>{new Date(item.date_du).toLocaleDateString('fr-FR')}</Td>
                    <Td>{new Date(item.date_au).toLocaleDateString('fr-FR')}</Td>
                    <Td>{item.lieu_depart}</Td>
                    <Td>{item.lieu_arrive}</Td>
                    <Td>{item.nom}</Td>
                    <Td width="5%">
                        <FaEdit onClick={() => handleEdite(item)} />
                    </Td>
                    <Td width="5%">
                        <FaTrash onClick={() => handleDelete(item.id_aut)} />
                    </Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
  )
}


export default GridAut;
