import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu() {
  const [percentage, setPercentage] = [95];

  return (
    <MenuContainer>
      <StyledLink to='/habitos'>
        <p>Hábitos</p>
      </StyledLink>
      <StyledLink to='/hoje'>
        <CircularProgressbarWrapper>
          <CircularProgressbar
            value={percentage}
            text='Hoje'
            styles={buildStyles({
              backgroundColor: '#52B6FF',
              textColor: '#fff',
              pathColor: '#fff',
              trailColor: 'transparent',
            })}
          />
        </CircularProgressbarWrapper>
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
const CircularProgressbarWrapper = styled.div`
  background: #52b6ff;
  padding: 6px;
  width: 91px;
  height: 91px;
  border-radius: 50%;
  margin-bottom: 50px;
`;

const StyledLink = styled(Link)`
  color: #52b6ff;
  text-decoration: none;
`;
