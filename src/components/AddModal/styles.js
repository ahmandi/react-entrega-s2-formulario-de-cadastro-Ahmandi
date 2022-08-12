import styled from 'styled-components';

export const Black = styled.div`
	background: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
`;

export const View = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	position: absolute;
	left: 50%;
	transform: translate(-50%, -50%);
	top: 35%;
	width: 66%;
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	input,
	select {
		background: #343b41;
		border: 1.2182px solid #f8f9fa;
		border-radius: 4px;
		color: white;
		padding: 0.5em;
	}

	label {
		padding: 0.6rem 0;
	}

	p + label {
		padding: 0 0 0.6rem 0;
	}
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 75%;

	padding: 0 2rem;

	background: #343b41;

	border-radius: 4px 4px 0px 0px;

	p {
		font-weight: 700;
		font-size: 14px;
		line-height: 24px;
		color: #f8f9fa;
	}

	button {
		cursor: pointer;
		background: none;
		border: none;
		color: #868e96;

		&:hover {
			color: white;
		}
	}

	z-index: 1;

	@media (min-width: 425px) {
		max-width: 17rem;
	}
`;

export const FormDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 75%;

	padding: 1rem 2rem;

	text-align: left;
	font-weight: 400;
	font-size: 12.182px;

	background: #212529;
	color: white;

	p {
		color: red;
	}

	button {
		padding: 0.7rem;

		color: white;
		background: #ff577f;

		border: 1.2182px solid #ff577f;
		border-radius: 4.06066px;

		&:hover {
			background: rgba(255, 87, 127, 0.8);
		}
	}

	@media (min-width: 425px) {
		max-width: 17rem;
	}
`;
