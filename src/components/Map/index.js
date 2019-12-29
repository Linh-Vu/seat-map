import React  from 'react';
import T from 'prop-types';
import { Main } from './styled';
import { size, SPACING } from './constants';
import Seat from '../Seat';
import { getTypeStyle } from './utils';
import { lines } from 'mokup';

const left = SPACING + 30;

const Map = (props) => {
	const { controlId, selectSeat, seats } = props;

	return (
		<Main size={size} id={controlId}>
			{lines.map((item, index) => (
				<text
					className={'line-name'}
					key={item.key}
					x={SPACING}
					y={(index + 1)*(SPACING*3) + index*SPACING/2 + index*2}
				>
					{item.name}
				</text>
			))}

			{seats.map(item => (
				<Seat
					key={item.id}
					seat={item}
					onSelect={selectSeat}
					base={{
						className: `seat-default ${getTypeStyle(item.type.key, item.status)}`,
						x: left + item.position[1]*(SPACING + size.width),
						y: SPACING + item.position[0]*(SPACING + size.height),
						rx: 4,
						ry: 4,
					}}
				/>
			))}
		</Main>
	);
};

Map.propTypes = {
	controlId: T.string.isRequired,
};

export default Map;
