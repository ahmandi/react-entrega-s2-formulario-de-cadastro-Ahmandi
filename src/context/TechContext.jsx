import { createContext, useContext } from 'react';
import api from '../Services';
import { AuthContext } from './AuthContext';

export const TechContext = createContext();

const TechProvider = ({ children }) => {
	const token = localStorage.getItem('@KenzieHub:token');
	const { user, setUser } = useContext(AuthContext);

	const TechAdd = async (data) => {
		const response = await api.post('/users/techs', data);
		api.defaults.headers.authorization = `Bearer ${token}`;

		setUser((oldUser) => {
			return { ...oldUser, techs: [...oldUser.techs, response.data] };
		});
	};

	const TechRemove = async (tech) => {
		await api.delete(`/users/techs/${tech}`).then(() => {
			api.defaults.headers.authorization = `Bearer ${token}`;

			const RemovedTechs = user.techs.filter((item) => tech !== item.id);

			setUser({ ...user, techs: RemovedTechs });
		});
	};

	return (
		<TechContext.Provider value={{ TechAdd, TechRemove }}>
			{children}
		</TechContext.Provider>
	);
};

export default TechProvider;
