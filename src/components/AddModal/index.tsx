import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { View, Title, Form, FormDiv, Black } from './styles';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { TechContext } from '../../context/TechContext';
import { ITechs } from '../../context/AuthContext';
import { IHandlers } from '../../pages/Dashboard';

function AddTechModal({ handleCloseModal }: IHandlers) {
	const { TechAdd } = useContext(TechContext);

	const formSchema = yup.object().shape({
		title: yup.string().required('Name required'),
		status: yup.string().required('Selection required'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ITechs>({ resolver: yupResolver(formSchema) });

	function handleAddTech(data: ITechs) {
		TechAdd(data);
		handleCloseModal();
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<Black>
				<View>
					<Title>
						<p>Add technology</p>
						<button onClick={handleCloseModal}>X</button>
					</Title>
					<Form onSubmit={handleSubmit(handleAddTech)}>
						<FormDiv>
							<label htmlFor="title">Name</label>
							<input
								type="text"
								placeholder="Insert technology"
								{...register('title')}
							/>
							<p>{errors.title?.message}</p>

							<label htmlFor="status">Select status</label>
							<select {...register('status')}>
								<option value="Iniciante">Beginner</option>
								<option value="Intermediário">Intermediate</option>
								<option value="Avançado">Advanced</option>
							</select>
							<p>{errors.status?.message}</p>

							<button type="submit">Register Technology</button>
						</FormDiv>
					</Form>
				</View>
			</Black>
		</motion.div>
	);
}

export default AddTechModal;
