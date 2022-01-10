import Top from './Top';
import Menu from './Menu';
import Habit from './HabitToday';
import styled from 'styled-components';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import axios from 'axios';

import { useState, useContext, useEffect } from 'react';
import PercentageContext from '../contexts/PercentageContext';
import HabitsContext from '../contexts/HabitsTodayContext';
import UserContext from '../contexts/UserContext';
import TokenContext from '../contexts/TokenContext';

export default function Hoje() {
  const { user, setUser } = useContext(UserContext);
  const { percentage, setPercentage } = useContext(PercentageContext);
  const { habits, setHabits } = useContext(HabitsContext);
  const { token, setToken } = useContext(TokenContext);

  useEffect(() => {
    if (token === null) return;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const pToday = axios.get(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
      config
    );
    pToday.then((res) => {
      setHabits(res.data);
      
    });
    pToday.catch((res) => console.log(res));
    if (habits === null) return;
    setPercentage((habits.filter((habit) => habit.done === true))/habits.length);

  }, [token, habits]);
  dayjs.locale('pt-br');
  return (
    <>
      <Top />
      <Menu />
      <Container percentage={percentage}>
        <header>
          <h1>{dayjs().format('dddd, DD/MM')}</h1>
          <h2>
            {percentage === 0
              ? 'Nenhum hábito concluído ainda'
              : '67% dos hábitos concluídos'}
          </h2>
        </header>
        {!habits ? '' : habits.map((habit) => <Habit {...habit} />)}
      </Container>
    </>
  );
}

const Container = styled.div`
  background: #f2f2f2;
  height: 100vh;
  padding: 70px 18px;

  header {
    margin: 28px 0;
  }
  h1 {
    font-size: 22.98px;
    color: #126ba5;
  }
  h2 {
    font-size: 17.98px;
    font-weight: 400;
    color: ${(props) => (props.percentage === 0 ? '#bababa' : '#8FC549')};
  }
`;
