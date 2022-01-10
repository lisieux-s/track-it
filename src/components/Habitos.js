import Top from './Top';
import Menu from './Menu';
import Habit from './HabitHabits';

import styled from 'styled-components';
import axios from 'axios';

import { useContext, useState, useEffect } from 'react';
import HabitsHabitsContext from '../contexts/HabitsHabitsContext';
import TokenContext from '../contexts/TokenContext';

export default function Habitos() {
  const { token, setToken } = useContext(TokenContext);
  const { habitsHabits, setHabitsHabits } = useContext(HabitsHabitsContext);
  const [name, setName] = useState('');
  const [days] = useState([1, 3, 5]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (token === null) return;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const pHabits = axios.get(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
      config
    );
    pHabits.then((res) => {
      setHabitsHabits(res.data);
      console.log(res.data);
    });
    pHabits.catch((res) => console.log(res));
  }, [token]);

  function toggleHide() {
    setDisabled(!disabled);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    let pNewHabit = axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
      {
        name,
        days,
      },
      config
    );
    setDisabled(true);

    pNewHabit.then((res) => {
      setDisabled(false);
      console.log(res);
    });

    pNewHabit.catch((res) => {
      alert(res);
      setDisabled(false);
    });
  }
  return (
    <>
      <Top />
      <Menu />
      <Container>
        <header>
          <h1>Meus hábitos</h1>
          <Add onClick={toggleHide}>+</Add>
        </header>
        <CreateHabitWrapper disabled={disabled}>
          <form onSubmit={handleSubmit}>
            <input 
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='nome do hábito'
              />
            <CreateHabitWeekdays>
              <label htmlFor='DOM'>D</label>
              <CreateHabitWeekday type='checkbox' id='DOM' />
              <label htmlFor='SEG'>S</label>
              <CreateHabitWeekday type='checkbox' id='SEG' />
              <label htmlFor='TER'>T</label>
              <CreateHabitWeekday type='checkbox' id='TER' />
              <label htmlFor='QUA'>Q</label>
              <CreateHabitWeekday type='checkbox' id='QUA' />
              <label htmlFor='QUI'>Q</label>
              <CreateHabitWeekday type='checkbox' id='QUI' />
              <label htmlFor='SEX'>S</label>
              <CreateHabitWeekday type='checkbox' id='SEX' />
              <label htmlFor='SAB'>S</label>
              <CreateHabitWeekday type='checkbox' id='SAB' />
            </CreateHabitWeekdays>
            <Buttons>
              <Cancel type='button' onClick={toggleHide}>Cancelar</Cancel>
              <Submit type='submit'>Salvar</Submit>
            </Buttons>
          </form>
        </CreateHabitWrapper>
        {!habitsHabits ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        ) : (
          habitsHabits.map((habit) => <Habit {...habit} />)
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  background: #f2f2f2;
  padding: 70px 18px;

  header {
    display: flex;
    justify-content: space-between;
    margin: 28px 0;

    div {
      display: flex;
      align-items: center;
    }
  }
  h1 {
    font-size: 22.98px;
    color: #126ba5;
  }
  p {
    color: #bababa;
  }
`;

const Add = styled.button`
  width: 40px;
  color: #ffffff;
  font-size: 26.98px;
  background: #52b6ff;
  border: none;
  border-radius: 5px;
`;

const CreateHabitWrapper = styled.div`
  display: ${(props) => (!props.disabled ? 'none' : 'flex')};
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 18px;
  border-radius: 5px;

  input {
    padding: 10px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    color: #666666;
  }
  button {
    border-radius: 5px;
    width: 84px;
    height: 35px;
  }
`;
const CreateHabitWeekdays = styled.div`
  display: flex;
  input {
    width: auto;
    height: auto;
  }
`;
const CreateHabitWeekday = styled.input``;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 32px;
`;
const Cancel = styled.button`
  color: #52b6ff;
  background: none;
  border: none;
`;
const Submit = styled.button`
  border: none;
  background: #52b6ff;
  color: #fff;
`;
