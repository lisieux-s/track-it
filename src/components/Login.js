import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import TokenContext from '../contexts/TokenContext';

import styled from 'styled-components';
import axios from 'axios';

import TrackItBig from '../assets/TrackItBig.png';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [disabled, setDisabled] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const { token, setToken } = useContext(TokenContext);

  let navigate = useNavigate();

  function submitLogin(e) {
    e.preventDefault();

    let pLogin = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
      {
        email,
        password,
      }
    );
    setDisabled(true);

  pLogin.then((res) => {
    navigate('/hoje');
    setDisabled(false);
    setUser(res.data);
    setToken(res.data.token);
  });

  pLogin.catch((res) => {
    alert(res);
    setDisabled(false);
  });
  }
  return (
    <Container disabled={disabled}>
      <img src={TrackItBig} alt='TrackIt' />
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
        <button type='submit'>
        {disabled ? <Loader type='ThreeDots' color='#FFFFFF' /> : 'Entrar'}

        </button>
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
      background: ${(props) => (props.disabled ? '#F2F2F2' : '#FFFFFF')};
      padding: 9px;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      border-radius: 5px;
      height: 45px;

      background: ${(props) => (props.disabled ? '#52B6FFB3' : '#52B6FF')};
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