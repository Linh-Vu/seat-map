import React, { memo } from 'react';
import { Main } from './styled';

const Seat = (props) => {
	const { base, seat, onSelect } = props;

	const selectSeat = () => {
		if (seat.status === 1) {
			onSelect(seat);
		}
	};

	return (
		<Main onClick={selectSeat} selected={seat.selected}>
			<rect {...base} />
			<text x={base.x + 10} y={base.y + 22}>{seat.colName}</text>
		</Main>
	);
};

export default memo(Seat);
