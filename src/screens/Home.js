import React from 'react';
import { Container } from 'react-bootstrap';
import ErrorText from '../components/ErrorText';
import FeaturedCarousel from '../components/FeaturedCarousel';
import { getAllProjects } from '../resources/projects';

const Home = () => {
	const projects = getAllProjects();
	return (
		<>
			<Container className='main'>
				{projects && projects.length === 0 ? (
					<ErrorText
						text={'Sorry, there are no projects here.'}
						showButton={true}
					/>
				) : !projects ? (
					<ErrorText showButton={true} />
				) : (
					<FeaturedCarousel
						featuredProjects={projects.filter(
							(project) => project.featured
						)}
					/>
				)}
			</Container>
		</>
	);
};

export default Home;
