import styled from 'styled-components';

import backg_space2 from '../../assets/backg_space2.jpg';

export const Container = styled.div `
    height: 100vh;
    display: flex;
`; 
export const Content = styled.div `
    width: 50%;
    padding: 50px 100px 20px;
`; 
export const Background = styled.div `
    display: flex;
    flex: 1;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: url(${backg_space2}) no-repeat center;
    background-size: cover;
`; 
export const TextIntro = styled.div `
    font-style: Montserrat;
    color: #EDE9E0;
    margin: 0px 120px;

    h1{
        font-size: 72px;
    }
    p{
        font-size: 36px;
    }
`; 
export const TextContent = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    .show-welcome {
        margin-top: 50px;
        margin-bottom: 0px;
    }
    h1{
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 48px;
        color: rgb(0, 86, 134, 0.6);
    }
    .show-enterData {
        margin-top: 10px;
        font-size: 20px;
        text-align: center;
    }
`; 
export const Foot = styled.div ` 
    display: flex;
    flex-direction: column;
    align-items: center;
    .light-text {
        font-weight: lighter;
        color: gray;
        margin: 10px;
    }
    a {
      text-decoration: none;
      color: blueviolet;
    }
`;
export const Icons = styled.div ` 
    display: flex;
    justify-content: center;
    img {
			width: 50px;
			height: 50px;
			margin: 10px 20px;
    }
`;

