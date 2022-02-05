import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home.js';
import About from './screens/About.js';
import Project from './screens/Project.js';
import Blog from './screens/Blog.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ProjectDetails from './screens/ProjectDetails.js';
import BlogDetails from './screens/BlogDetails.js';
import NotFound from './screens/NotFound.js';
import ImageViewer from './screens/ImageViewer.js';

function App() {
	return (
		<div className='App bg-dark'>
			<BrowserRouter>
				<Header title={'Sameer Narendran'} />
				<Routes>
					<Route path='/' element={<Home />} exact />
					<Route path='/home' element={<Home />} exact />
					<Route path='/about' element={<About />} exact />
					<Route path='/blogs' element={<Blog />} exact />
					<Route path='/blogs/:search' element={<Blog />} exact />
					<Route path='/blog/:id' element={<BlogDetails />} exact />
					<Route path='/projects' element={<Project />} exact />
					<Route
						path='/projects/:search'
						element={<Project />}
						exact
					/>
					<Route
						path='/project/:id'
						element={<ProjectDetails />}
						exact
					/>
					<Route
						path='/img/:imgurl'
						element={<ImageViewer />}
						exact
					/>
					<Route path='*' element={<NotFound />} exact />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
