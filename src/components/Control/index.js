import React, { PureComponent } from 'react';
import T from 'prop-types';
import svgZoom from 'svg-pan-zoom';
import Map from '../Map';
import { controlId, config } from './constants';
import { Main } from './styled';

class Control extends PureComponent {
	constructor(props) {
		super(props);
		this.control = {};
	}

	componentDidMount() {
		this.control = svgZoom(`#${controlId}`, config);
		this.control.zoom(0.8);
	}
	handleZoomIn = () => {
		this.control.zoomIn();
	};

	handleZoomOut = () => {
		this.control.zoomOut();
	};

	render() {
		const { seats, selectSeat } = this.props;
		return (
			<Main>
				<Map
					selectSeat={selectSeat}
					controlId={controlId}
					seats={seats}
				/>

				<div className={'action-group'}>
					<button onClick={this.handleZoomIn} className={'control-btn'}>{'+'}</button>
					<button onClick={this.handleZoomOut} className={'control-btn'}>{'-'}</button>
				</div>
			</Main>
		);
	}
}

Control.defaultProps = {
	seats: [],
	selectSeat: () => {},
};

Control.propTypes = {
	seats: T.arrayOf(T.shape({})),
	selectSeat: T.func,
};

export default Control;
