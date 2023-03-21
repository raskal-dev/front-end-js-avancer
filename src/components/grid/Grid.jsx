import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 200%;
    margin: 20px auto;
    word-break: break-all;
`;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

export const Tbody = styled.tbody``;

export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

const Grid = ({ operateurs, setOperateurs, setOnEdit }) => {
    const handleEdite = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id_op) => {
        await axios.delete("http://localhost:3001/operateurs/delete/" + id_op).then(({ data }) => {
            const newArray = operateurs.filter((operateurs) => operateurs.id_op !== id_op);

            setOperateurs(newArray);
            toast.success(data);
        }).catch(({ data }) => toast.error(data));

        setOnEdit(null);
    };
  return (
    <Table>
        <Thead>
            <Tr>
                <Th>#</Th>
                <Th>Nom</Th>
                <Th>Type</Th>
                <Th>Permis</Th>
                <Th>N° Recepice</Th>
                <Th>NIF</Th>
                <Th>STAT</Th>
                <Th>Terrain</Th>
                <Th>Etat</Th>
                <Th></Th>
                <Th></Th>
            </Tr>
        </Thead>
        <Tbody>
            {operateurs.map((item, i) => (
                <Tr key={i}>
                    <Td>{item.id_op}</Td>
                    <Td>{item.nom}</Td>
                    <Td>{item.type}</Td>
                    <Td>{item.permis}</Td>
                    <Td>{item.num_recepice}</Td>
                    <Td>{item.nif}</Td>
                    <Td>{item.stat}</Td>
                    <Td>{item.titre_terrain}</Td>
                    <Td>{item.etat}</Td>
                    <Td width="5%">
                        <FaEdit onClick={() => handleEdite(item)} />
                    </Td>
                    <Td width="5%">
                        <FaTrash onClick={() => handleDelete(item.id_op)} />
                    </Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
  );
};

export default Grid;
