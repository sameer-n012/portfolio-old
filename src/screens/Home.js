import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedCarousel from '../components/FeaturedCarousel';
import projects from '../resources/projects';

const Home = () => {
	console.log(projects);
	return (
		<>
			<Header title='Portfolio' />
			<Container className='main'>
				<FeaturedCarousel
					featuredProjects={projects.filter(
						(project) => project.featured
					)}
				/>
			</Container>
			<Footer />
		</>
	);
};

export default Home;
