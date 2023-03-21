import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Global from '../../components/style/global';
import Form from '../../components/form/Form';
import Grid from '../../components/grid/Grid';
import axios from 'axios';
import { Menu } from '../../components/menu/Menu';

const Container = styled.div`
  width: 100%;
  max-width: 200%;
  margin-top: 20px;
  dispaly: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
    color: white;
    margin: 15px;
`;

const Operateur = () => {

  const [operateurs, setOperateurs] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getOperateurs = async () => {
    try {
      const res = await axios.get("http://localhost:3001/operateurs");
      setOperateurs(res.data.sort((a, b) => (a.nom > b.nom ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getOperateurs();
  }, [setOperateurs]);

  return (
    <>
      <Container>
        <Menu />
        <Title>Operatuer</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getOperateurs={getOperateurs} />
        <Grid operateurs={operateurs} setOperateurs={setOperateurs} setOnEdit={setOnEdit} />

      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <Global />

    </>
  )
}

export default Operateur;
