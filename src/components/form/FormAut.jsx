import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { Button, FormContainer, Input, InputArea, Label } from './Form';




const FormAut = ({ getAutorisation, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const aut = ref.current;

            aut.ref_autorisation.value = onEdit.ref_autorisation;
            aut.date_du.value = onEdit.date_du;
            aut.date_au.value = onEdit.date_au;
            aut.lieu_depart.value = onEdit.lieu_depart;
            aut.lieu_arrive.value = onEdit.lieu_arrive;
            aut.id_op.value = onEdit.id_op;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const aut = ref.current;

        if (
            !aut.ref_autorisation.value ||
            !aut.date_du.value ||
            !aut.date_au.value ||
            !aut.lieu_depart.value ||
            !aut.lieu_arrive.value ||
            !aut.id_op.value
        ) {
            return toast.warn("Remplissez tous les champs !");
        }

        if (onEdit) {
            await axios.put("http://localhost:3001/autorisation/update/" + onEdit.id_aut, {
                ref_autorisation: aut.ref_autorisation.value,
                date_du: aut.date_du.value,
                date_au: aut.date_au.value,
                lieu_depart: aut.lieu_depart.value,
                lieu_arrive: aut.lieu_arrive.value,
                id_op: aut.id_op.value,
            }).then(({ data }) => toast.success(data).catsh(({ data }) => toast.error(data)));
        } else {
            await axios.post("http://localhost:3001/autorisation", {
                ref_autorisation: aut.ref_autorisation.value,
                date_du: aut.date_du.value,
                date_au: aut.date_au.value,
                lieu_depart: aut.lieu_depart.value,
                lieu_arrive: aut.lieu_arrive.value,
                id_op: aut.id_op.value,
            }).then(({ data }) => toast.success(data).catsh(({ data }) => toast.error(data)));
        }

        aut.ref_autorisation.value = "";
        aut.date_du.value = "";
        aut.date_au.value = "";
        aut.lieu_depart.value = "";
        aut.lieu_arrive.value = "";
        aut.id_op.value = "";
        
        setOnEdit(null);
        getAutorisation();
    };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
        <InputArea>
            <Label>Reférence</Label>
            <Input name="ref_autorisation" />
        </InputArea>
        <InputArea>
            <Label>Du</Label>
            <Input type="date" name="date_du" />
        </InputArea>
        <InputArea>
            <Label>Au</Label>
            <Input type="date" name="date_au" />
        </InputArea>
        <InputArea>
            <Label>Départ</Label>
            <Input name="lieu_depart" />
        </InputArea>
        <InputArea>
            <Label>Arriver</Label>
            <Input name="lieu_arrive" />
        </InputArea>
        <InputArea>
            <Label>Opérateur</Label>
            <Input name="id_op" />
        </InputArea>

        <Button type="submit">Envoiyer</Button>
    </FormContainer>
  )
}

export default FormAut;