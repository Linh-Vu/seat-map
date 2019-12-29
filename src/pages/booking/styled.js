import styled from 'styled-components';

const Main = styled('div')`
	padding: 24px 0;
	display: flex;
	
	& .map-container {
		margin-right: 24px;
		
		& .map-content {
			margin-bottom: 24px;
			width: 400px;
			height: 400px;
			border: solid 1px rgba(255, 255, 255, 0.3);
			border-radius: 4px;
			overflow: hidden;
		}
		
		& .map-description {
			display: flex;
			justify-content: space-between;
			
			& .des-status {
				& .des-stt-item {
					margin-bottom: 12px;
					display: flex;
					
					& .type-available {
						background-color: rgba(0, 0, 0, 0.8);
					}
					
					& .type-booked {
						background-color: rgba(29, 202, 52, 0.8);
					}
					
					& .type-unavailable {
						background-color: rgba(255, 255, 255, 0.6);
					}
					
					& .des-stt-type {
						width: 18px;
						height: 18px;
						border-radius: 50%;
						margin-right: 6px;
						border: solid 1px rgba(255, 255, 255, 0.6);
					}
				}
			}
			
			& .des-type {
				width: 50%;
			}
			
			& .des-type-item {
				display: flex;
				align-items: center;
				margin-bottom: 12px;
				justify-content: space-between;
				
				& .type-name {
					display: flex;
					align-items: center;
				}
				
				& .seat-type {
					width: 24px;
					height: 24px;
					border-radius: 4px;
					border: solid 1px transparent;
					margin-right: 6px;
				}
			}
		}
	}
	
	& .booked-container {
	
	}
`;

export { Main };
