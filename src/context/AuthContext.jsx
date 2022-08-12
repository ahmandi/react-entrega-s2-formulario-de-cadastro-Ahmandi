import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Services';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		async function loadUser() {
			const token = localStorage.getItem('@KenzieHub:token');

			if (token) {
				try {
					api.defaults.headers.authorization = `Bearer ${token}`;

					const { data } = await api.get('/profile');

					console.log(data);

					setUser(data);
				} catch (error) {
					console.log(error);
				}
			}
			setLoading(false);
		}
		loadUser();
	}, []);

	const signIn = async (data) => {
		const response = await api.post('/sessions', data);
		const { user, token } = response.data;

		api.defaults.headers.authorization = `Bearer ${token}`;

		localStorage.clear();
		localStorage.setItem('@KenzieHub:token', token);
		localStorage.setItem('@KenzieHub:id', user.id);
		navigate('/dashboard', { replace: true });

		setUser(user);
	};

	const Register = async (data) => {
		await api.post('/users', data);
		navigate('/sessions', { replace: true });
	};

	return (
		<AuthContext.Provider value={{ user, signIn, Register, loading, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
