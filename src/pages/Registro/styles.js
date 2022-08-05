import styled from 'styled-components';

export const H1 = styled.h1`
	font-weight: 700;
	font-size: 18px;
	line-height: 28px;
	color: #f8f9fa;
`;

export const P = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 22px;
	color: #868e96;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;

	text-align: left;

	gap: 1.375rem;

	font-weight: 400;
	font-size: 12.182px;
	line-height: 0px;

	color: rgba(248, 249, 250, 1);
`;

export const Input = styled.input`
	background: #343b41;
	border: 1.2182px solid #343b41;
	border-radius: 4px;
	padding: 10px 16.2426px;
	color: #868e96;
`;

export const Select = styled.select`
	background: #343b41;
	border: 1.2182px solid #343b41;
	border-radius: 4px;
	padding: 10px 16.2426px;
	color: #868e96;
`;

export const Button = styled.button`
	width: 100%;
	height: 2.375rem;

	background: #59323f;

	border: 1.2182px solid #59323f;
	border-radius: 4px;
`;

export const Div = styled.div`
	width: 23.125rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2.625rem 1.375rem;
	gap: 0.8rem;

	background: #212529;
	box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
	border-radius: 4px;

	@media (max-width: 375px) {
		height: 50rem;
		max-width: 100%;
		padding: 0;
	}
`;

export const Header = styled.div`
	width: 26rem;

	padding: 1rem 0;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	button {
		background: #212529;
		border-radius: 4px;

		font-weight: 600;
		font-size: 12px;
		line-height: 28px;
		text-align: center;

		color: #f8f9fa;

		cursor: pointer;
	}

	@media (max-width: 375px) {
		width: 100%;
		padding: 0;
	}
`;

export const CenteringDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	@media (max-width: 375px) {
		padding: 0.5rem;
	}
`;
