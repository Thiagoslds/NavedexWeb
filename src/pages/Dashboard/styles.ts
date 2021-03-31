import styled from 'styled-components';

export const Container = styled.div ` 
  margin: 20px;
`;
export const Header = styled.div ` 
	display: flex;
	justify-content: space-between;
	align-items: center;
	h1 {
		font-size: 48px;
    color: rgb(0, 86, 134, 0.6);
	}
	a {
		text-decoration: none;
		color: black;
		font-size: 24px;
	}
`;
export const Menu = styled.div ` 
  /* display: flex; */
	/* justify-content: space-between; */
	h1{
		text-align: center;
		font-size: 50px;
	}
	button{
		border-radius: 20px;
		background-color: #02325F;
		padding: 10px 20px;
	}
	a{
		color: #FDF7F7;
    font-weight: bold;
		text-decoration: none;
	}
`;
export const Content = styled.div ` 
  display: flex;
	justify-content: space-around;
`;
export const Card = styled.div ` 
	margin-top: 30px;
	height: 350px;
	width: 280px;
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.2);
	padding: 5px;
	img {
		max-width:100%;
		max-height:100%;
	}
`;
export const Icons = styled.div ` 
	display: flex;
	justify-content: left;
	img {
		width: 25px;
		height: 25px;
		margin: 10px;
	}
`;
