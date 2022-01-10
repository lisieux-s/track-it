import Top from './Top';
import Menu from './Menu';
import styled from 'styled-components';

import { useContext } from 'react';
import HabitsHabitsContext from '../contexts/HabitsHabitsContext';

export default function Habitos() {
  const { habitHabits, setHabitHabits } = useContext(HabitsHabitsContext);
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
          <p>
          {!habitHabits ? 
          'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!' 
          :
          'teste'}
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
      justify-content: space-between;
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
