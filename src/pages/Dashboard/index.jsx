import { useState, useEffect } from 'react';
import api from '../../Services';
import Logo from '../../svg/Logo.png';
import { useNavigate } from 'react-router-dom';
import {
	Header,
	H1,
	P,
	Div,
	Img,
	Greeting,
	Paragraph,
	Para,
	Voltar,
} from './styles';

function Dashboard() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
	const [user] = useState(window.localStorage.getItem('@USERID'));
	const [data, setData] = useState({});
	const navigate = useNavigate();

	const updateMedia = () => {
		setIsDesktop(window.innerWidth > 768);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

	useEffect(() => {
		api.get(`/users/${user}`).then((response) => setData(response.data));
	});

	function handleLogout() {
		window.localStorage.clear();
		navigate('/sessions', { replace: true });
	}

	return (
		<div>
			<Header>
				<Img src={Logo} alt="Logo" />
				<Voltar onClick={() => handleLogout()}>Sair</Voltar>
			</Header>

			<Div>
				<Greeting>
					<H1>Hello, {data.name}</H1>
					<P>{data.course_module}</P>
				</Greeting>
			</Div>

			{isDesktop && (
				<>
					<Para>Too bad! We're under construction :(</Para>
					<Paragraph>
						Our app is under development, new updates coming soon!
					</Paragraph>
				</>
			)}
		</div>
	);
}

export default Dashboard;
