import { useState, useEffect, useContext } from 'react';
import Logo from '../../svg/Logo.png';
import { Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
import { AuthContext } from '../../context/AuthContext';

function Dashboard() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
	const { user, loading } = useContext(AuthContext);
	const navigate = useNavigate();

	const updateMedia = () => {
		setIsDesktop(window.innerWidth > 768);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

	function handleLogout() {
		window.localStorage.clear();
		navigate('/sessions', { replace: true });
	}

	if (loading) return <div>Loading...</div>;

	return user ? (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<Header>
				<Img src={Logo} alt="Logo" />
				<Voltar onClick={() => handleLogout()}>Logout</Voltar>
			</Header>

			<Div>
				<Greeting>
					<H1>Hello, {user.name}</H1>
					<P>{user.course_module}</P>
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
		</motion.div>
	) : (
		<Navigate to="/sessions" replace={true} />
	);
}

export default Dashboard;
