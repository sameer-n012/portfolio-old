import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { getFilteredProjects, getAllProjects } from '../resources/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectSearchForm from '../components/ProjectSearchForm';
import ErrorText from '../components/ErrorText';

const Project = () => {
	const params = useParams();

	var projects = [];
	if (params['search']) {
		projects = getFilteredProjects(params['search'].split(','));
	} else {
		projects = getAllProjects();
	}

	return (
		<>
			<Container className='main'>
				{projects && projects.length === 0 ? (
					<ErrorText
						text={'Sorry, there are no projects here'}
						showButton={true}
					/>
				) : !projects ? (
					<ErrorText showButton={true} />
				) : (
					<Container
						fluid
						className='align-items-center p-0 d-flex flex-column'
					>
						<ProjectSearchForm />
						<Container className='d-flex justify-content-evenly'>
							<Row xs='auto' className='justify-content-center'>
								{projects.map((project) => (
									<Col key={project._id}>
										<ProjectCard project={project} />
									</Col>
								))}
							</Row>
						</Container>
					</Container>
				)}
			</Container>
		</>
	);
};

export default Project;
