import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import MainPage from '../pages/MainPage';
import UserPage from '../pages/userPage/UserPage';
import UpdateUserPage from '../pages/UpdateUserPage';

function App() {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});

	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage users={users} setUsers={setUsers}/>}/>
				<Route path="/:id" element={<UserPage setUser={setUser}/>}/>
				<Route path="/:id/update" element={<UpdateUserPage user={user} users={users} setUsers={setUsers}/>}/>
			</Routes>
		</Router>
	);
}

export default App;
