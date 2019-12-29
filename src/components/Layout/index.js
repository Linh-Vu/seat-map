import React from 'react';
import { Header, Footer, Body, Main } from './styled';
import Booking from "pages/booking";

const Layout = () => {
	return (
		<Main>
			<Header>
				<div className={'header-title'}>{'Seat Map'}</div>
			</Header>
			<Body>
				<Booking />
			</Body>
			<Footer/>
		</Main>
	)
};

export default Layout;
