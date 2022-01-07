import Top from './Top';
import Menu from './Menu';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';


export default function Hoje(props) {
  
  dayjs.locale('pt-br');

  return (
    <>
      <Top />
      <Menu />
      <Container>
        <header>
          <h1>
            {dayjs().format('dddd, DD/MM')}
          </h1>
          <p>Nenhum hábito concluído ainda</p>
        </header>
        {
          //divs geradas dinamicamente com map or somethin
        }
        <Habit>
          <div>
            <h1>Ler 1 capítulo de livro</h1>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </div>
          <Checkmark>
            <img src='' alt='ayyy lmao' />
          </Checkmark>
        </Habit>
        <Habit>
          <div>
            <h1>Ler 1 capítulo de livro</h1>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </div>
          <Checkmark>
            <img src='' alt='ayyy lmao' />
          </Checkmark>
        </Habit>
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
      color: #126BA5;
  }
  p {
      color: #BABABA;
  }
`;

const Checkmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 69px;
  height: 69px;

  border-radius: 5px;
  background: #ebebeb;
`;

const Habit = styled.div`
    display: flex;
    justify-content: space-between;
    height: 94px;
    padding: 12px;
    margin-bottom: 10px;

    border-radius: 5px;
    background: #FFFFFF;
    
    h1 {
       color: #666666; 
       font-weight: 400;
       font-size: 19.98px;
    }
    p {
       color: #666666; 
       font-weight: 400;
       font-size: 12.98px;
`;
