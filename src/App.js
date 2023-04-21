import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import ChessPage from './Components/ChessPage/ChessPage';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import GuidesPage from './Components/GuidesPage/GuidesPage';
// import Leaderboard from './Components/Leaderboard/Leaderboard';
import UserPage from './Components/UserPage/UserPage';

function App() {
    const user = true //dummy user
    // const user = JSON.parse(localStorage.getItem('data'))
	// pass user into components -> user={user}
	return (
		<BrowserRouter>
			<NavigationBar user={user}/> 
			<Routes>
				<Route path="/login" exact element={<Login/>}/>
				<Route path="/signup" exact element={<Signup/>}/>
				<Route path="/chess" exact element={<ChessPage/>}/>
				<Route path="/guides" exact element={<GuidesPage/>}/>
				{/* <Route path="/leaderboard" exact element={<Leaderboard/>}/> */}
				<Route path="/user_stats" exact element={<UserPage />}/>
				<Route path="/" exact element={<LandingPage/>}/>
			</Routes>
		</BrowserRouter>
	);
	}

export default App;
