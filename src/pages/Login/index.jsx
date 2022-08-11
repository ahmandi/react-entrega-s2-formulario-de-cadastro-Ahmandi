import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Login() {
	const { signIn } = useContext(AuthContext);

	const formSchema = yup.object().shape({
		email: yup.string().required('Email required').email('Invalid email'),
		password: yup.string().required('Password required'),
	});

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formSchema) });

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
					<Form onSubmit={handleSubmit(signIn)}>
						<label htmlFor="email">Email</label>
						<Input
							type="text"
							name="email"
							placeholder="Email"
							{...register('email')}
						/>
						<p>{errors.email?.message}</p>

						<label htmlFor="password">Password</label>
						<Input
							type="password"
							name="password"
							placeholder="Password"
							{...register('password')}
						/>
						<p>{errors.password?.message}</p>

						<Button type="submit">Sign In</Button>
					</Form>

					<Link to="/register">
						<Para>Need to create an account?</Para>
					</Link>
					<Cadastro onClick={() => navigate('/register', { replace: true })}>
						Register
					</Cadastro>
				</Div>
			</CenteringDiv>
		</motion.div>
	);
}

export default Login;
