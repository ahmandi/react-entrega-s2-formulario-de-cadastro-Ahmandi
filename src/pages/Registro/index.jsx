import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../Services';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../svg/Logo.png';
import {
	CenteringDiv,
	Div,
	Header,
	Form,
	H1,
	P,
	Input,
	Select,
	Button,
	InputContainer,
} from './styles';

function Registro() {
	const formSchema = yup.object().shape({
		name: yup.string().required('Name required'),
		email: yup.string().required('Email required').email('Invalid Email'),
		password: yup
			.string()
			.required('Password required')
			.matches(/[A-Z]/, 'Must contain at least 1 uppercase character.')
			.matches(/(\d)/, 'Must contain at least 1 number'),
		confirmPassword: yup
			.string()
			.required('Confirm password required')
			.oneOf([yup.ref('password')], 'Passwords must match'),
		bio: yup.string().required('Bio required'),
		contact: yup.string().required('Contact required'),
		select: yup.string().required('Selection required'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formSchema) });

	const navigate = useNavigate();

	const [myValue, setMyValue] = useState('');

	const onSubmitFunction = (data) => {
		console.log(data);

		api
			.post('/users', data)
			.then((_) => {
				navigate('/sessions', { replace: true });
			})
			.catch((error) => console.log(error));
	};

	console.log(errors);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<CenteringDiv>
				<Header>
					<img src={Logo} alt="Logo" />
					<button onClick={() => navigate('/sessions', { replace: true })}>
						Back
					</button>
				</Header>
				<Div>
					<H1>Make your account</H1>
					<P>It's quick and easy!</P>
					<Form onSubmit={handleSubmit(onSubmitFunction)}>
						<InputContainer>
							<label htmlFor="name">Name</label>
							<Input
								type="text"
								name="name"
								id="name"
								placeholder="Type your name here"
								{...register('name')}
							/>
							<p>{errors.name?.message}</p>
						</InputContainer>

						<InputContainer>
							<label htmlFor="email">Email</label>
							<Input
								type="text"
								name="email"
								id="email"
								placeholder="Type your email here"
								{...register('email')}
							/>
							<p>{errors.email?.message}</p>
						</InputContainer>

						<InputContainer>
							<label htmlFor="password">Password</label>
							<Input
								type="password"
								name="password"
								id="password"
								placeholder="Type your password here"
								{...register('password')}
							/>
							<p>{errors.password?.message}</p>
						</InputContainer>

						<InputContainer>
							<label htmlFor="confirmPassword">Confirm Password</label>
							<Input
								type="password"
								name="confirmPassword"
								id="confirmPassword"
								placeholder="Type your password again here"
								{...register('confirmPassword')}
							/>
							<p>{errors.confirmPassword?.message}</p>
						</InputContainer>

						<InputContainer>
							<label htmlFor="bio">Bio</label>
							<Input
								type="text"
								name="bio"
								id="bio"
								placeholder="Tell us about you"
								{...register('bio')}
							/>
							<p>{errors.bio?.message}</p>
						</InputContainer>

						<InputContainer>
							<label htmlFor="contact">Contact</label>
							<Input
								type="text"
								name="contact"
								id="contact"
								placeholder="Contact options"
								{...register('contact')}
							/>
							<p>{errors.contact?.message}</p>
						</InputContainer>

						<InputContainer>
							<label htmlFor="select">Select module</label>
							<Select
								{...register('course_module')}
								onChange={(e) =>
									setMyValue('course_module', e.target.value, {
										shouldValidate: true,
									})
								}
								defaultValue={myValue}
							>
								<option>First module (Introduction to Frontend)</option>
								<option>Second module (Advanced Frontend)</option>
								<option>Third module (Introduction to Backend)</option>
								<option>Fourth module (Advanced Backend)</option>
							</Select>
							<p>{errors.select?.message}</p>
						</InputContainer>

						<Button type="submit">Register</Button>
					</Form>
				</Div>
			</CenteringDiv>
		</motion.div>
	);
}

export default Registro;
