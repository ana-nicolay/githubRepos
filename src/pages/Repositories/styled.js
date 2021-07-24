import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
	width: 50%;
	margin: 10vh auto;
`;

export const Title = styled.h1`
	text-align: center;
	font-size: 2.5rem;
	font-family: sans-serif;
	color: white;
`;

export const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const ListItem = styled.li`
	background-color: #fff;
	border-radius: 0.5rem;
	color: #000;
	margin: 0.5rem 0;
	padding: 0.5rem; 
	font-weight: 500;
`;

export const LinkHome = styled(Link) `
	background-color: #fff;
	border-radius: 0.5rem;
	border: none;
	color: #300aaa;
	display: block;
	margin: 2rem auto;
	padding: 0.5rem 0;
	text-align: center;
	text-decoration: none;
	width: 25%;

	&:hover{
		text-weight: 600;
		background-color: #300aaa;
		color: #fff;
	}
`;
