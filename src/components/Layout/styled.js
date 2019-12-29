import styled from 'styled-components';

const Main = styled('div')`
	background-color: #111;
`;

const Header = styled('div')`
	padding: 0 24px;
	height: 80px;
	border-bottom: solid 1px rgba(255, 255, 255, 0.1);
	display: flex;
	align-items: center;
	
	& .header-title {
		font-size: 24px;
		font-weight: 800;
	}
`;

const Body = styled(`div`)`
	padding: 0 24px;
	min-height: calc(100vh - 262px);
`;

const Footer = styled(`div`)`
	padding: 0 24px;
	border-top: solid 1px rgba(255, 255, 255, 0.1);
	height: 180px;
`;

export { Main, Header, Body, Footer };
