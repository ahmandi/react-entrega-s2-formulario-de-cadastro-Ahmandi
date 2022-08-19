import { createContext, ReactNode, useContext } from 'react';
import api from '../Services';
import { AuthContext, ITechs } from './AuthContext';

export const TechContext = createContext<ITechProviderData>(
	{} as ITechProviderData
);

interface ITechProviderData {
	TechAdd: (data: ITechs) => void;
	TechRemove: (data: string) => void;
}

interface ITechProviderProps {
	children: ReactNode;
}

const TechProvider = ({ children }: ITechProviderProps) => {
	const { user, setUser } = useContext(AuthContext);

	const TechAdd = async (data: ITechs) => {
		const response = await api.post('/users/techs', data);

		setUser((oldUser) => {
			return { ...oldUser, techs: [...oldUser.techs, response.data] };
		});
	};

	const TechRemove = async (tech: string) => {
		await api.delete(`/users/techs/${tech}`).then(() => {
			const RemovedTechs = user?.techs.filter((item) => tech !== item.title);

			if (RemovedTechs && user) {
				setUser({ ...user, techs: RemovedTechs });
			}
		});
	};

	return (
		<TechContext.Provider value={{ TechAdd, TechRemove }}>
			{children}
		</TechContext.Provider>
	);
};

export default TechProvider;
