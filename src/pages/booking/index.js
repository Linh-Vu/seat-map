import React, { useState } from 'react';
import { generateSeat } from "mokup";
import Control from "components/Control";
import Booked from "components/Booked";
import NumberFormat from "react-number-format";
import { types } from 'mokup';
import { Main } from './styled';

const Booking = () => {
	const [seats, setSeats] = useState(generateSeat());
	const [seatSelected, setSeatSelected] = useState([]);
	const selectSeat = (seat) => {
		const seatSelected = seats.filter(item => item.selected);
		const seatBooked = seatSelected.find(item => item.id === seat.id);

		if (seatSelected.length < 6 || seatBooked) {
			setSeats(seats.map(item => item.id === seat.id ? {...seat, selected: !seat.selected} : item));

			if (seatBooked) {
				setSeatSelected(seatSelected.filter(item => item.id !== seatBooked.id));
			} else {
				seatSelected.push(seat);
				setSeatSelected(seatSelected);
			}
		} else {
			alert('You are just only booking max 6 seats!');
		}
	};


	return (
		<Main>
			<div className={'map-container'}>
				<div className={'map-content'}>
					<Control seats={seats} selectSeat={selectSeat} />
				</div>
				<div className={'map-description'}>
					<div className={'des-status'}>
						<div className={'des-stt-item'}>
							<div className={'des-stt-type type-booked'} />
							<span>{'Booked'}</span>
						</div>

						<div className={'des-stt-item'}>
							<div className={'des-stt-type type-available'} />
							<span>{'Available'}</span>
						</div>

						<div className={'des-stt-item'}>
							<div className={'des-stt-type type-unavailable'} />
							<span>{'Unavailable'}</span>
						</div>
					</div>
					<div className={'des-type'}>
						{Object.keys(types).map(key => (
							<div key={key} className={'des-type-item'}>
								<div className={'type-name'}>
									<div className={'seat-type'} style={{ borderColor: types[key].color }} />
									<span>{types[key].name}</span>
								</div>
								<span>{'-'}</span>
								<span>
									<NumberFormat displayType={'text'} value={types[key].price} thousandSeparator />
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={'booked-container'}>
				<Booked seats={seatSelected} />
			</div>
		</Main>
	)
};

export default Booking;
