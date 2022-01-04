import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  function submitSignUp(e) {
    e.preventDefault();
    //send info to axios
  }

  return (
    <Container>
      <form onSubmit={submitSignUp}>
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
        <input
          type='text'
          placeholder='nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='url'
          placeholder='foto'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type='submit'>Cadastrar</button>
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
