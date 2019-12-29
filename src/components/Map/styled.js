import styled from 'styled-components';

const Main = styled('svg')`
	background-color: #232323;
	width: 100%;
	height: 100%;
	
	& .line-name {
		fill: rgba(255, 255, 255, 0.8);
		font-size: 22px;
	}
	
	& .seat-default {
		width: ${({size}) => size.width}px;
		height: ${({size}) => size.height}px;
		stroke-width: 2px;
		cursor: pointer;
		
		&:hover {
			stroke: #32CD32;
		}
	}
	
	& .seat-standard {
		stroke: rgba(255, 255, 255, 0.6);
	}
	
	& .seat-vip {
		stroke: #FFFF00;
	}
	
	& .seat-deluxe {
		stroke: #8A2BE2;
	}
	
	& .seat-unavailable {
		stroke: rgba(255, 255, 255, 0.6);
		fill: rgba(255, 255, 255, 0.6);
		cursor: initial;
		
		&:hover {
			stroke: rgba(255, 255, 255, 0.6);
		}
	}
`;

export { Main };
