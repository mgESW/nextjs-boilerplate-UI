import '@/styles/globals.css'

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import SignIn from './signin';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		
	 <Route path='/sign-in' component={SignIn} />
	</Routes>
	</Router>
);
}

export default App;