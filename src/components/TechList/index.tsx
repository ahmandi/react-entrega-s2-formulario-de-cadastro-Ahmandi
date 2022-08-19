import { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { TechContext } from '../../context/TechContext';
import { Container, Div } from './styles.d';

interface ITech {
	tech: {
		title: string;
		status: string;
	};
}

function TechList({ tech }: ITech) {
	const { TechRemove } = useContext(TechContext);

	return (
		<Container>
			<p>{tech.title}</p>
			<Div>
				<p>{tech.status}</p>
				<BsFillTrashFill
					onClick={() => TechRemove(tech.title)}
					style={{ cursor: 'pointer' }}
				/>
			</Div>
		</Container>
	);
}

export default TechList;
