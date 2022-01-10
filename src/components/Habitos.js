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
  const { habitsHabits, setHabitsHabits} = useContext(HabitsHabitsContext)
  const [name, setName] = useState('teste');
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
      console.log(res.data)
    });
    pHabits.catch(res => console.log(res))

  }, [token]);

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
      }, config
    );
    setDisabled(true);

  pNewHabit.then((res) => {
    setDisabled(false);
    console.log(res)
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
          <div>
            <h1>Meus hábitos</h1>
            <Add>+</Add>
          </div>
          <CreateHabitWrapper disabled={disabled}>
            <form onSubmit={handleSubmit}>
              <input />
              <WeekdaysCreate>
                <label htmlFor='DOM'>D</label>
                <input type='checkbox' id='DOM'></input>
                <label htmlFor='SEG'>S</label>
                <input type='checkbox' id='SEG'></input>
                <label htmlFor='TER'>T</label>
                <input type='checkbox' id='TER'></input>
                <label htmlFor='QUA'>Q</label>
                <input type='checkbox' id='QUA'></input>
                <label htmlFor='QUI'>Q</label>
                <input type='checkbox' id='QUI'></input>
                <label htmlFor='SEX'>S</label>
                <input type='checkbox' id='SEX'></input>
                <label htmlFor='SAB'>S</label>
                <input type='checkbox' id='SAB'></input>
              </WeekdaysCreate>
              <div>
                <button>Cancelar</button>
                <button type='submit'>Salvar</button>
              </div>
            </form>
          </CreateHabitWrapper>
          <p>
            {!habitsHabits
              ? 'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!'
              : habitsHabits.map((habit => <Habit {...habit}/>))}
          </p>
        </header>
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
    margin-top: 30px;
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
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 18px;
  border-radius: 5px;
  input {
    width: 100%;
  }
`;
const WeekdaysCreate = styled.div``;
