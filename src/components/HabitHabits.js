import styled from 'styled-components';

export default function Habit(props) {
    let days = props.days;
  return (
    <HabitWrapper>
      <p>{props.name}</p>
      <Weekdays>
        <Weekday days={days} id={0}>
          D
        </Weekday>
        <Weekday days={days} id={1}>D</Weekday>
        <Weekday days={days} id={2}>D</Weekday>
        <Weekday days={days} id={3}>D</Weekday>
        <Weekday days={days} id={4}>D</Weekday>
        <Weekday days={days} id={5}>D</Weekday>
        <Weekday days={days} id={6}>D</Weekday>
      </Weekdays>
    </HabitWrapper>
  );
}

const HabitWrapper = styled.div`
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
