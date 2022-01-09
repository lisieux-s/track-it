import Top from './Top';
import Menu from './Menu';
import Habit from './Habit';
import styled from 'styled-components';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export default function Hoje() {
  dayjs.locale('pt-br');
  return (
    <>
      <Top />
      <Menu />
      <Container>
        <header>
          <h1>{dayjs().format('dddd, DD/MM')}</h1>
          <p>Nenhum hábito concluído ainda</p>
        </header>
          <Habit />
          <Habit />
          <Habit />
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
  p {
    color: #bababa;
  }
`;
