import styled from 'styled-components';

const Main = styled('g')`
	& rect {
		fill: ${({ selected }) => selected ? 'rgba(29, 202, 52, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
	}
	
	& text {
		fill: #fff;
		font-weight: bold;
	}
`;

export { Main };
