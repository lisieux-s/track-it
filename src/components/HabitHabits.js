import styled from 'styled-components';
import axios from 'axios';

import Trashcan from '../assets/Trashcan.png'

import TokenContext from '../contexts/TokenContext';
import { useContext } from 'react';

export default function Habit(props) {
    const {token, setToken} = useContext(TokenContext)

    function handleDelete() {
            const config = {
                headers: { Authorization: `Bearer ${token}` },
              };
          
              let pDelete = axios.delete(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`,
                {
                },
                config
              );
        
    }

    let days = props.days;
  return (
    <HabitWrapper>
      <p>{props.name}</p>
      <Weekdays>
        <Weekday days={days} id={0}>
          D
        </Weekday>
        <Weekday days={days} id={1}>S</Weekday>
        <Weekday days={days} id={2}>T</Weekday>
        <Weekday days={days} id={3}>Q</Weekday>
        <Weekday days={days} id={4}>Q</Weekday>
        <Weekday days={days} id={5}>S</Weekday>
        <Weekday days={days} id={6}>S</Weekday>
      </Weekdays>
      <img src={Trashcan} alt='delete' onClick={handleDelete}/>
    </HabitWrapper>
  );
}

const HabitWrapper = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  height: 94px;
  gap: 8px;

  p {
    display: flex;
    align-items: center;
    width: 303px;
    height: 45px;
    font-size: 19.98px;
    margin: 0;
    padding: 0;
    color: #666666;
  }

  img {
      position: absolute;
      top: 10px;
      right: 10px;
  }
`;
const Weekday = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;

  background: ${(props) =>
    (props.days).includes(props.id) ? '#CFCFCF' : '#fff'};
color: ${(props) =>
    (props.days).includes(props.id) ? '#fff' : '#CFCFCF'};
  
`;
const Weekdays = styled.div`
  display: flex;
  gap: 4px;
`;
