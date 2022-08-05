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
} from './styles';

function Registro() {
	const formSchema = yup.object().shape({
		name: yup.string().required('Nome obrigatório'),
		email: yup.string().required('Email obrigatório').email('Email inválido'),
		password: yup
			.string()
			.required('Senha obrigatória')
			.matches(/[A-Z]/, 'deve conter ao menos 1 letra maiúscula')
			.matches(/(\d)/, 'deve conter ao menos 1 número'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Confirmação deve ser igual a senha'),
		bio: yup.string().required('Bio obrigatória'),
		contact: yup.string().required('Contato obrigatório'),
		select: yup.string().required('Seleção obrigatória'),
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
						Voltar
					</button>
				</Header>
				<Div>
					<H1>Crie sua conta</H1>
					<P>Rápido e grátis, vamos nessa</P>
					<Form onSubmit={handleSubmit(onSubmitFunction)}>
						<label htmlFor="name">Nome</label>
						<Input
							type="text"
							name="name"
							id="name"
							placeholder="Digite aqui seu nome"
							{...register('name')}
						/>
						{errors.name?.message}

						<label htmlFor="email">Email</label>
						<Input
							type="text"
							name="email"
							id="email"
							placeholder="Digite aqui seu email"
							{...register('email')}
						/>
						{errors.email?.message}

						<label htmlFor="password">Senha</label>
						<Input
							type="password"
							name="password"
							id="password"
							placeholder="Digite aqui sua senha"
							{...register('password')}
						/>
						{errors.password?.message}

						<label htmlFor="confirmPassword">Confimar Senha</label>
						<Input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							placeholder="Digite novamente sua senha"
							{...register('password')}
						/>
						{errors.confirmPassword?.message}

						<label htmlFor="bio">Bio</label>
						<Input
							type="text"
							name="bio"
							id="bio"
							placeholder="Digite aqui sua bio"
							{...register('bio')}
						/>
						{errors.bio?.message}

						<label htmlFor="contact">Contato</label>
						<Input
							type="text"
							name="contact"
							id="contact"
							placeholder="Opções de contato"
							{...register('contact')}
						/>
						{errors.contact?.message}

						<label htmlFor="select">Selecionar Módulo</label>
						<Select
							{...register('course_module')}
							onChange={(e) =>
								setMyValue('course_module', e.target.value, {
									shouldValidate: true,
								})
							}
							defaultValue={myValue}
						>
							<option>Primeiro módulo (Introdução ao Frontend)</option>
							<option>Segundo módulo (Frontend Avançado)</option>
							<option>Terceiro módulo (Introdução ao Backend)</option>
							<option>Quarto módulo (Backend Avançado)</option>
						</Select>
						{errors.select?.message}

						<Button type="submit">Cadastrar</Button>
					</Form>
				</Div>
			</CenteringDiv>
		</motion.div>
	);
}

export default Registro;
