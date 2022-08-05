import styled from 'styled-components';

export const Header = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 1rem 0 1rem 0;
`;

export const Img = styled.img`
	width: 6.563rem;
	height: 1rem;
`;

export const Voltar = styled.button`
	width: 3.438rem;
	border-radius: 4px;

	font-weight: 600;
	font-size: 12px;
	line-height: 28px;

	text-align: center;

	color: #f8f9fa;
	background: #212529;
`;

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

export const Greeting = styled.div`
	padding: 1rem;

	@media (min-width: 768px) {
		padding: 0;
		display: flex;
		justify-content: space-around;
	}

	@media (min-width: 1440px) {
		padding: 0;
		display: flex;
		justify-content: space-around;
	}
`;

export const Div = styled.div`
	text-align: initial;

	&:before {
		content: '';
		display: block;
		width: 100%;
		border: 1.2182px solid #212529;
	}

	&:after {
		content: '';
		display: block;
		width: 100%;
		border: 1.2182px solid #212529;
	}
`;

export const Para = styled.p`
	font-weight: 700;
	font-size: 18px;
	line-height: 28px;
	color: #f8f9fa;
`;

export const Paragraph = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
`;
