import styled from 'styled-components';
import checkmark from '../assets/Checkmark.svg'
import { useState, useContext } from 'react';

import PercentageContext from '../contexts/PercentageContext';

export default function Habit(props) {
  const [checked, setChecked] = useState(false);
  const {percentage, setPercentage} = useContext(PercentageContext);

  function handleClick() {
    setChecked(!checked);
    if(!checked) {
      setPercentage(75)
    } else {
      setPercentage(0)
    }
  }

  return (
    <HabitWrapper checked={checked}>
      <div>
        <h3>Ler 1 capítulo de livro</h3>
        <p>Sequência atual: <span>3 dias</span></p>
        <p>Seu recorde: 5 dias</p>
      </div>
      <Checkmark checked={checked} onClick={handleClick}>
        <img src={checkmark} alt='ayyy lmao' />
      </Checkmark>
    </HabitWrapper>
  );
}
const HabitWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 94px;
    padding: 12px;
    margin-bottom: 10px;

    border-radius: 5px;
    background: #FFFFFF;
    
    h3 {
       color: #666666; 
       font-weight: 400;
       font-size: 19.98px;
    }
    p {
       color: #666666; 
       font-weight: 400;
       font-size: 12.98px;}

    span {
      color: ${props => props.checked ? '#8FC549' : ''}
    }
`;

const Checkmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 69px;
  height: 69px;

  border-radius: 5px;
  background: ${(props) => (props.checked ? '#8FC549': '#ebebeb')};
`;
