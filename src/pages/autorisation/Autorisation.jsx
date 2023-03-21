import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import FormAut from '../../components/form/FormAut';
import GridAut from '../../components/grid/GridAut';
import { Menu } from '../../components/menu/Menu';
import Global from '../../components/style/global';

const Container = styled.div`
  width: 100%;
  max-width: 200%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  color: white;
  margin: 15px;
`;

const Autorisation = () => {
  const [autorisation, setAutorisation] = useState([]);
  const [onEdit, setOnEdite] = useState(null);

  const getAutorisation = async () => {
    try {
      const res = await axios.get("http://localhost:3001/autorisation");
      setAutorisation(res.data.sort((a, b) => (a.nom > b.nom ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getAutorisation();
  }, [setAutorisation]);
  return (
    <>
        <Menu />
        <Title>Autorisation</Title>
      <Container>
        <FormAut onEdit={onEdit} setOnEdit={setOnEdite} getAutorisation={getAutorisation} />
        <GridAut autorisation={autorisation} setAutorisation={setAutorisation} setOnEdit={setOnEdite} />

      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <Global />
    </>
  )
}

export default Autorisation;
