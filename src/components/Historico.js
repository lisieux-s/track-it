import Top from './Top';
import Menu from './Menu';
import styled from 'styled-components';

export default function Historico() {
  return (
    <>
      <Top />
      <Menu />
      <Container>
        <header>
          <h1>Histórico</h1>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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
  }
  h1 {
    font-size: 22.98px;
    color: #126ba5;
  }
  p {
    color: #bababa;
  }
`;
