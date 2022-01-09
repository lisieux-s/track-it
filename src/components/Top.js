import styled from 'styled-components';
import { useContext } from 'react';
import UserImageContext from '../contexts/UserImageContext';
import TrackIt from '../assets/TrackIt.png'

export default function Top() {
  const { userImage, setUserImage } = useContext(UserImageContext);
  console.log(userImage);
  return (
    <TopContainer>
      <img src={TrackIt} alt='TrackIt' />
      <User src={userImage} alt='User' />
    </TopContainer>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;

  width: 100%;
  height: 70px;

  padding: 0 18px;

  background: #126ba5;
  box-shadow: 0px 4px 4px 0px #00000026;
`;
const User = styled.img`
  object-fit: cover;
  border: none;
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background: #fff;
`;
