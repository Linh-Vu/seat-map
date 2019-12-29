import styled from 'styled-components';

const Main = styled('div')`
	width: 100%;
	height: 100%;
	position: relative;
	
	& .action-group {
		position: absolute;
		z-index: 1;
		top: 6px;
		right: 12px;
		display: flex;
		
		& .control-btn {
			border: none;
			background: #fff;
			color: rgba(0, 0, 0, 0.8);
			cursor: pointer;
			outline: none;
			font-size: 18px;
			height: 24px;
			width: 24px;
			border-radius: 4px;
			margin: 0 6px;
			font-weight: bold;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

export { Main };
