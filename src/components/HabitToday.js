import styled from 'styled-components';
import axios from 'axios';

import checkmark from '../assets/Checkmark.svg';
import { useState, useContext, useEffect } from 'react';

import TokenContext from '../contexts/TokenContext';
import PercentageContext from '../contexts/PercentageContext';

export default function Habit(props) {
  const [checked, setChecked] = useState(false);
  const { token, setToken } = useContext(TokenContext);

  function handleClick() {
    console.log(props.id); //id retorna certo
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (!props.done) {
      console.log('check');
      let pCheck = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`,
        {},
        config
      );
      pCheck.then(() => {
        setChecked(!checked);
        props.getHabits();
      });
      pCheck.catch((res) => console.log(res));
    } else {
      console.log('uncheck');
      let pUncheck = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/uncheck`,
        {},
        config
      );
      pUncheck.then(() => {
        setChecked(!checked);
        props.getHabits();
      });
      pUncheck.catch((res) => console.log(res));
    }
  }

  return (
    <HabitWrapper checked={checked}>
      <div>
        <h3>{props.name}</h3>
        <p>
          Sequência atual: <span>{props.currentSequence} dias</span>
        </p>
        <p>
          Seu recorde: <Highest>{props.highestSequence} dias</Highest>
        </p>
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
  background: #ffffff;

  h3 {
    color: #666666;
    font-weight: 400;
    font-size: 19.98px;
  }
  p {
    color: #666666;
    font-weight: 400;
    font-size: 12.98px;
  }

  span {
    color: ${(props) => (props.checked ? '#8FC549' : '')};
  }
`;

const Checkmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 69px;
  height: 69px;

  border-radius: 5px;
  background: ${(props) => (props.checked ? '#8FC549' : '#ebebeb')};
`;

const Highest = styled.span`
  color: ${(props) =>
    props.checked && props.currentSequence >= props.highestSequence
      ? '#8FC549'
      : '#666666'};
`;
