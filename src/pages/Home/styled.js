import styled from 'styled-components';

export const HomeContainer = styled.div`
  	align-items: center;
  	align-content: center;
  	background-color: #ffffff99;
  	background-position-x: 50%;
    background-position-y: center;
    border-radius: 0.6rem;
    box-shadow: 9px 4px 4px rgba(0, 0, 0, 0.2);
  	display: block;
  	justify-content: center;
  	margin: auto;
  	max-width: 45%;
  	padding-bottom: 0.5rem;
`;

export const DivContent = styled.div`
  	align-items: center;
  	align-content: center;  	
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 6px 4px 4px rgba(0, 0, 0, 0.1);
    color: #300aaa;
  	display: flex;
  	flex-direction: row;
	justify-content: space-around;
  	margin: 5vh;
  	padding: 0.25rem 1rem;
  	text-align: center;
`;	

export const DivTitle = styled.div`
  	align-items: center;
  	align-content: center;
	color: #300aaa;
  	display: flex;
  	flex-direction: row;
  	justify-content: center;
  	margin: 25vh auto 0 auto;
  	text-align: center;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	text-align: center;
	font-weight: 600;
`;

export const Input = styled.input `
	border: none;
	font-size: 1rem;
  	font-family: -apple-system,'Roboto', 'Helvetica Neue', sans-serif;
	height: 1.5rem;
	padding: 0.5rem;
  	color: #000;
  	width: 100%;


	&:focus,
	&:active{
		box-shadow: none;
		outline: none;
	}
`;

export const Button = styled.button `
	border: none;
    border-left: 2px solid #300aaa;
	background-color: #fff;
	font-size: 1rem;
	font-family: -apple-system,'Roboto', 'Helvetica Neue', sans-serif;
	height: 2rem;
	padding: 0.25rem 0.75rem 0.25rem 0.75rem;
	text-align: center;
	
	&:hover{
		cursor: pointer;
		color: #300aaa;
		font-weight: 600;
	}

	&:focus,
	&:active{
		outline: none;
		box-shadow: none;

`;

export const ErrorMsg = styled.span`
	background-color: #ffffff;
	border-radius: 1rem;
	border: 2px solid red;
	color: #000;
	display: block;
	font-family: sans-serif;
	font-weight: 600;
	margin: 2rem auto;
	padding: 0.5rem;
	text-align: center;
	width: 50%;
`;