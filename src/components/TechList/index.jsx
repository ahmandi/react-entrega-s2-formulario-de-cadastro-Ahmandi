import { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { TechContext } from '../../context/TechContext';
import { Container, Div } from './styles';

function TechList({ tech }) {
	const { TechRemove } = useContext(TechContext);

	return (
		<Container>
			<p>{tech.title}</p>
			<Div>
				<p>{tech.status}</p>
				<BsFillTrashFill
					onClick={() => TechRemove(tech.id)}
					style={{ cursor: 'pointer' }}
				/>
			</Div>
		</Container>
	);
}

export default TechList;
