import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../Services';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../svg/Logo.png';
import {
	CenteringDiv,
	Div,
	Button,
	Img,
	Form,
	H1,
	Input,
	Para,
	Cadastro,
} from './styles';
//import { useState } from 'react';

function Login() {
	//const [user, setUser] = useState('')

	const formSchema = yup.object().shape({
		email: yup.string().required('Email obrigatório').email('Email inválido'),
		password: yup.string().required('Senha obrigatória'),
	});

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formSchema) });

	const onSubmitFunction = (data) => {
		console.log(data);

		api
			.post('/sessions', data)
			.then((response) => {
				console.log(response.data);

				const { user, token } = response.data;

				if (token) {
					window.localStorage.clear();
					window.localStorage.setItem('@TOKEN', token);
					window.localStorage.setItem('@USERID', user.id);
				} else {
					throw new Error(response.message);
				}
				navigate('/dashboard', { replace: true });
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
				<Img src={Logo} alt="Logo" />
				<Div>
					<H1>Login</H1>
					<Form onSubmit={handleSubmit(onSubmitFunction)}>
						<label htmlFor="email">Email</label>
						<Input
							type="text"
							name="email"
							placeholder="email"
							{...register('email')}
						/>
						{errors.email?.message}

						<label htmlFor="password">Senha</label>
						<Input
							type="password"
							name="password"
							placeholder="Senha"
							{...register('password')}
						/>
						{errors.password?.message}

						<Button type="submit">Entrar</Button>
					</Form>

					<Link to="/register">
						<Para>Ainda não possui uma conta?</Para>
					</Link>
					<Cadastro onClick={() => navigate('/register', { replace: true })}>
						Cadastre-se
					</Cadastro>
				</Div>
			</CenteringDiv>
		</motion.div>
	);
}

export default Login;
