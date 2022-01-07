import styled from "styled-components";

export default function Top() {
    return(
        <TopContainer>
            <img src='src/assets/TrackIt.png' alt='TrackIt'/>
            <User src='' alt='User' />
        </TopContainer>
    )
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

    background: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;

`
const User = styled.img`
    object-fit: cover;
    border: none;
    width: 51px;
    height: 51px;
    border-radius: 50%;
    background: #fff;
`