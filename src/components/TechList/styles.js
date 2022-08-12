import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;

	width: 96%;

	background: #121214;
	color: white;

	border-radius: 4px;

	padding: 0 0.7rem;

	&:hover {
		background-color: rgba(134, 142, 150, 0.4);
	}
`;

export const Div = styled.div`
	display: flex;
	align-items: center;
	color: #868e96;

	gap: 1rem;
`;
