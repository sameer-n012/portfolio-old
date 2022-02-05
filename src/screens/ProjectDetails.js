import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { getProjectById } from '../resources/projects';
import profileDetails from '../resources/myProfile';
import ErrorText from '../components/ErrorText';
import ImageGallery from '../components/ImageGallery';
import { FaAngleRight } from 'react-icons/fa';

const ProjectDetails = () => {
	const navigate = useNavigate();

	const project = getProjectById(useParams()['id']);

	const searchTag = (tag) => {
		navigate(`/projects/${tag}`);
	};

	return (
		<>
			<Container className='main'>
				{!project ? (
					<ErrorText
						text={'Sorry, this project does not exist.'}
						showButton={true}
					/>
				) : (
					<Container fluid className='mt-5 mb-5 d-flex flex-column'>
						<Container className='text-light m-2 mb-4'>
							<Button
								variant='outline-light'
								onClick={() => navigate(-1)}
								className='btn'
							>
								Back
							</Button>
						</Container>
						<Container
							style={{ borderBottom: '2px solid white' }}
							className='text-light pb-3 m-2'
						>
							<h2>{project.name}</h2>
							<div className='mb-2 d-flex flex-wrap'>
								{project.tags.map((tag) => (
									<small
										key={tag}
										onClick={() => searchTag(tag)}
										className='project-card-tag cursor-clickable mb-2'
									>
										{tag}
									</small>
								))}
							</div>
							<p className='m-0'>{project.description}</p>
							<a
								href={`${profileDetails.githubLink}/${project.githubRepoName}`}
								target='_blank'
								rel='noopener noreferrer'
								className={`small cursor-clickable not-link m-0 mb-2 ${
									!project.githubRepoName
										? 'link-disabled'
										: ''
								}`}
							>
								See Source Code
								<FaAngleRight />
							</a>
						</Container>
						<Container className='text-light m-2'>
							<h4>Image Gallery</h4>
							<ImageGallery project={project} />
						</Container>
					</Container>
				)}
			</Container>
		</>
	);
};

export default ProjectDetails;
