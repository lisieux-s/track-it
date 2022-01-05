import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import logo from './logo.png';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submitLogin(e) {
    e.preventDefault();
    //send email and password to axios
  }

  return (
    <Container>
      <img src={logo} alt='logo'/>
      <form onSubmit={submitLogin}>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Entrar</button>
      </form>
      <StyledLink to='/cadastro'>Não tem uma conta? Cadastre-se!</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 36px;
  gap: 25px;

  form {
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 6px;

    input {
      border: 1px solid #d4d4d4;
      border-radius: 5px;
      height: 45px;

      color: #dbdbdb;
      font-size: 19.98px;

      padding: 9px;
    }
    button {
      border: none;
      border-radius: 5px;
      height: 45px;

      background: #52b6ff;
      color: #ffffff;
    }
  }
`;

const StyledLink = styled(Link)`
  color: #52b6ff;
  font-size: 13.98px;
  :visited {
    color: #52b6ff;
    font-size: 13.98px;
  }
`;
