import './App.css';
import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes } from 'react-router-dom';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
	return (
		<div className="App">
			<AnimatePresence>
				<Routes>
					<Route path="/sessions" element={<Login />} />
					<Route path="/register" element={<Registro />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="*" element={<Navigate to="/sessions" replace />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
