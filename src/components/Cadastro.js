import { Link } from 'react-router-dom';
import { useState } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import logo from './logo.png';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { useEffect } from 'react/cjs/react.development';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const [loading, setLoading] = useState(false);
  const [buttonContent, setButtonContent] = useState('Cadastrar');
  const [disabled, setDisabled] = useState(false);
  const [inputBgColor, setInputBgColor] = useState('');
  const [buttonBgColor, setButtonBgColor] = useState('');

  function submitSignUp(e) {
    e.preventDefault();

    let pSignUp = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
      {
        email,
        name,
        image,
        password,
      }
    );
    setLoading(true);

    pSignUp.then((res) => {
      //redirecionar para rota login
      setLoading(false);
    });

    pSignUp.catch((res) => {
      alert(res);
      setLoading(false);
    });
  }
  useEffect(() => {
    if (loading) {
      setButtonContent(<Loader type='ThreeDots' color='#FFFFFF' />);
      setButtonBgColor('#F2F2F2');
      setInputBgColor('#F2F2F2');
    }
  }, []);

  return (
    <Container>
      <img src={logo} alt='logo' />
      <form onSubmit={submitSignUp}>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
        />
        <input
          type='password'
          placeholder='senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disabled}
        />
        <input
          type='text'
          placeholder='nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disabled}
        />
        <input
          type='url'
          placeholder='foto'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled={disabled}
        />
        <button type='submit' disabled={disabled}>
          {buttonContent}
        </button>
      </form>
      <StyledLink to='/'>Já tem uma conta? Faça login!</StyledLink>
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
