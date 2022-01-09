import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';

import UserContext from '../contexts/UserContext';

import TrackIt from '../assets/TrackIt.png'

export default function Top() {
  const { user, setUser } = useContext(UserContext);
  const [image, setImage] = useState('')
  console.log(user)

  useEffect(() => {
    if(user !== null) {
      setImage(user.image)
    } 
  }, [user])
  
  return (
    <TopContainer>
      <img src={TrackIt} alt='TrackIt' />
      <User src={image} alt='User' />
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
