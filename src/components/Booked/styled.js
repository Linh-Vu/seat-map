import styled from 'styled-components';

const Main = styled('div')`
	border: solid 1px rgba(255, 255, 255, 0.3);
	border-radius: 4px;
	padding: 12px;
	width: 320px;
	
	& .booked-title {
		font-size: 16px;
		margin-bottom: 24px;
		text-transform: capitalize;
		padding-bottom: 12px;
		border-bottom: solid 1px rgba(255, 255, 255, 0.3);
	}
	
	& .booked-total-price {
		font-size: 16px;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
	}
	
	& .blank-line {
		height: 5px;
		background-color: rgba(255, 255, 255, 0.6);
		margin: 12px 0;
	}
	
	& .booked-list {
		margin-bottom: 12px;
		height: 300px;
		overflow-y: auto;

		& .empty-message {
			height: 100%;
			text-align: center;
			margin-top: 40px;
		}
		
		& .booked-item {
			margin-bottom: 12px;
			padding: 6px;
			
			&:hover {
				background-color: rgba(255, 255, 255, 0.1);
			}
			
			& .booked-line {
				margin-bottom: 6px;
				display: flex;
				width: 100%;
				justify-content: space-between;
				
				& .line-title {
					color: rgba(255, 255, 255, 0.6);
				}
				
				& .line-price {
					font-weight: 600;
				}
			}
		}
	}
`;

export { Main };
