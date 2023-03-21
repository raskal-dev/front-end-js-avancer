import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import axios from 'axios';

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

const Form = ({ getOperateurs, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const operateur = ref.current;

            operateur.nom.value = onEdit.nom;
            operateur.type.value = onEdit.type;
            operateur.permis.value = onEdit.permis;
            operateur.num_recepice.value = onEdit.num_recepice;
            operateur.nif.value = onEdit.nif;
            operateur.stat.value = onEdit.stat;
            operateur.titre_terrain.value = onEdit.titre_terrain;
            operateur.etat.value = onEdit.etat;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const operateur = ref.current;

        if (
            !operateur.nom.value ||
            !operateur.type.value ||
            !operateur.permis.value ||
            !operateur.num_recepice.value ||
            !operateur.nif.value ||
            !operateur.stat.value ||
            !operateur.titre_terrain.value ||
            !operateur.etat.value
        ) {
            return toast.warn("Remplissez tous les champs!")
        }

        if (onEdit) {
            await axios.put("http://localhost:3001/operateurs/update/" + onEdit.id_op, {
                nom: operateur.nom.value,
                type: operateur.type.value,
                permis: operateur.permis.value,
                num_recepice: operateur.num_recepice.value,
                nif: operateur.nif.value,
                stat: operateur.stat.value,
                titre_terrain: operateur.titre_terrain.value,
                etat: operateur.etat.value,
            }).then(({ data }) => toast.success(data)).catch(({ data }) => toast.error(data));
        } else {
            await axios.post("http://localhost:3001/operateurs", {
                nom: operateur.nom.value,
                type: operateur.type.value,
                permis: operateur.permis.value,
                num_recepice: operateur.num_recepice.value,
                nif: operateur.nif.value,
                stat: operateur.stat.value,
                titre_terrain: operateur.titre_terrain.value,
                etat: operateur.etat.value,
            }).then(({ data }) => toast.success(data)).catch(({ data }) => toast.error(data));
        }

        operateur.nom.value = "";
        operateur.type.value = "";
        operateur.permis.value = "";
        operateur.num_recepice.value = "";
        operateur.nif.value = "";
        operateur.stat.value = "";
        operateur.titre_terrain.value = "";
        operateur.etat.value = "";

        setOnEdit(null);
        getOperateurs();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nom</Label>
                <Input name="nom" />
            </InputArea>
            <InputArea>
                <Label>Type</Label>
                <Input name="type" />
            </InputArea>
            <InputArea>
                <Label>Permis</Label>
                <Input name="permis" />
            </InputArea>
            <InputArea>
                <Label>N° Recepice</Label>
                <Input name="num_recepice" />
            </InputArea>
            <InputArea>
                <Label>NIF</Label>
                <Input name="nif" />
            </InputArea>
            <InputArea>
                <Label>STAT</Label>
                <Input name="stat" />
            </InputArea>
            <InputArea>
                <Label>Terrain</Label>
                <Input name="titre_terrain" />
            </InputArea>
            <InputArea>
                <Label>Etat</Label>
                <Input type="number" name="etat" />
            </InputArea>

            <Button type="submit">Envoyer</Button>
        </FormContainer>
    )
}

export default Form;
