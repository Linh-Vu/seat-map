import React from 'react';
import T from 'prop-types';
import NumberFormat from "react-number-format";
import { Main } from './styled';

const Booked = (props) => {
	const { seats } = props;
	const cost = seats.map(item => item.type.price).reduce((res, next) => (res + next), 0);

	return (
		<Main>
			<div className={'booked-title'}>{'Seat booked'}</div>
			<div className={'booked-list'}>
				{seats.length < 1 && <div className={'empty-message'}>{'You have no seat!'}</div>}
				{seats.map(item => (
					<div key={item.id} className={'booked-item'}>
						<div className={'booked-line'}>
							<span>
								<span className={'line-title'}>{'Type: '}</span>
								<span style={{ color: item.type.color }}>{item.type.name}</span>
							</span>
							<span className={'line-price'}>{item.name}</span>
						</div>

						<div className={'booked-line'}>
							<span className={'line-title'}>{'Price'}</span>
							<NumberFormat displayType={'text'} value={item.type.price} thousandSeparator />
						</div>
					</div>
				))}
			</div>

			<div className={'blank-line'} />

			<div className={'booked-total-price'}>
				<span>{'Total cost'}</span>
				<NumberFormat displayType={'text'} value={cost} thousandSeparator />
			</div>
		</Main>
	)
};

Booked.defaultProps = {
	seats: [],
};

Booked.propTypes = {
	seats: T.arrayOf(T.shape({}))
};

export default Booked;
