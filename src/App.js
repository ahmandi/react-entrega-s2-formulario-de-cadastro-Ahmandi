import './App.css';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
	return (
		<div className="App">
			<AnimatePresence>
				<Routes>
					<Route path="*" element={<Registro />} />
					<Route path="/sessions" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
