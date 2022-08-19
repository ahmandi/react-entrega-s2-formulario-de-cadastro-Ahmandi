import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Logo from '../../svg/Logo.png';
import { motion } from 'framer-motion';
import {
	Header,
	H1,
	P,
	Div,
	Img,
	Greeting,
	Voltar,
	TechDiv,
	TechContainer,
	TechCentralizer,
} from './styles.d';
import { AuthContext } from '../../context/AuthContext';
import AddTechModal from '../../components/AddModal';
import TechList from '../../components/TechList';

export interface IHandlers {
	handleCloseModal: () => void;
}

function Dashboard() {
	const { user, loading } = useContext(AuthContext);
	const [isModalOpen, setisModalOpen] = useState<boolean>(false);
	const navigate = useNavigate();

	function handleOpenModal() {
		setisModalOpen(true);
	}

	function handleCloseModal() {
		setisModalOpen(false);
	}

	function handleLogout() {
		window.localStorage.clear();
		navigate('/sessions', { replace: true });
	}

	if (loading) return <p>Loading...</p>;

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

			<TechDiv>
				<p>Technologies</p>
				<button onClick={() => handleOpenModal()}>+</button>
			</TechDiv>

			{isModalOpen && <AddTechModal handleCloseModal={handleCloseModal} />}

			<TechCentralizer>
				<TechContainer>
					{user?.techs.map((tech, index) => (
						<TechList tech={tech} key={index} />
					))}
				</TechContainer>
			</TechCentralizer>
		</motion.div>
	) : (
		<Navigate to="/sessions" replace={true} />
	);
}

export default Dashboard;
