import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Menu() {
  return (
    <MenuContainer>
      <StyledLink to='/habitos'>
        <p>Hábitos</p>
      </StyledLink>
      <StyledLink to='/hoje'>
        <Today>Hoje</Today>
      </StyledLink>
      <StyledLink to='/historico'>
        <p>Histórico</p>
      </StyledLink>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;

  width: 100%;
  height: 70px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 0px #00000026;

  color: #52b6ff;
`;
const Today = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #52b6ff;
  width: 91px;
  height: 91px;
  border-radius: 50%;
  margin-bottom: 50px;

  color: #ffffff;
`;

const StyledLink = styled.div`
  color: #52b6ff;
  text-decoration: none;
`;
