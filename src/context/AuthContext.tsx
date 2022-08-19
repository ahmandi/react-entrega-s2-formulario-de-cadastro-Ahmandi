import { HeadersDefaults } from 'axios';
import React, {
	createContext,
	ReactNode,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Services';

export const AuthContext = createContext<IAuthProviderData>(
	{} as IAuthProviderData
);

interface IAuthProviderData {
	user: IUser | null;
	setUser: React.Dispatch<SetStateAction<IUser>>;
	loading: boolean;
	signIn: (data: ISignIn) => void;
	Register: (data: IUserRegister) => void;
}

export interface ISignIn {
	email: string;
	password: string;
}

interface CommonHeaderProperties extends HeadersDefaults {
	Authorization: string;
}

export interface IUser {
	id: string;
	name: string;
	email: string;
	course_module: string;
	bio: string;
	contact: string;
	created_at: string;
	updated_at: string;
	techs: ITechs[];
	works: IWorks[];
	avatar_url: null;
}

export interface ITechs {
	title: string;
	status: string;
}

export interface IWorks {
	title: string;
	description: string;
}

// interface IResponseSignIn {
// 	user: IUser;
// 	token: string;
// }

export interface IUserRegister {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	bio: string;
	contact: string;
	course_module: string;
}

interface IAuthProviderProps {
	children: ReactNode;
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
	const [user, setUser] = useState<IUser>({} as IUser);
	const [loading, setLoading] = useState<boolean>(true);
	const navigate = useNavigate();

	useEffect(() => {
		async function loadUser() {
			const token = localStorage.getItem('@KenzieHub:token');

			if (token) {
				try {
					api.defaults.headers = {
						Authorization: `Bearer ${token}`,
					} as CommonHeaderProperties;

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

	const signIn = async (data: ISignIn) => {
		const response = await api.post('/sessions', data);
		const { user, token } = response.data;

		api.defaults.headers = {
			Authorization: `Bearer ${token}`,
		} as CommonHeaderProperties;

		localStorage.clear();
		localStorage.setItem('@KenzieHub:token', token);
		localStorage.setItem('@KenzieHub:id', user.id);
		navigate('/dashboard', { replace: true });

		setUser(user);
	};

	const Register = async (data: IUserRegister) => {
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
