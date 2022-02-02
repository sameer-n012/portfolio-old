import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home.js';

function App() {
	return (
		<div className='App bg-dark'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} exact />
					<Route path='/home' element={<Home />} exact />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
