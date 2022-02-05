import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FaAngleRight } from 'react-icons/fa';
import profileDetails from '../resources/myProfile';

const Project = ({ project }) => {
	const navigate = useNavigate();

	const viewProject = () => {
		navigate(`/project/${project._id}`);
	};

	const searchTag = (tag) => {
		navigate(`/projects/${tag}`);
	};

	return (
		<Card className='project border-black-2 p-0 m-3 bg-light'>
			<Card.Img
				onClick={() => viewProject()}
				className='project-image cursor-clickable'
				variant='top'
				src={require(`../images/${
					project.images[0] ? project.images[0] : 'defaultImage.png'
				}`)}
			/>
			<Card.Body className='cursor-clickable'>
				<Card.Title
					className='mb-2 overflow-text'
					onClick={() => viewProject()}
				>
					{project.name}
				</Card.Title>
				<Card.Text className='small overflow-text'>
					{!project.tags
						? ''
						: project.tags.map((tag) => (
								<small
									key={tag}
									onClick={() => searchTag(tag)}
									className='project-card-tag'
								>
									{tag}
								</small>
						  ))}
				</Card.Text>
			</Card.Body>
			<Card.Footer className='d-flex justify-content-between align-items-center'>
				<a
					href={`${profileDetails.githubLink}/${project.githubRepoName}`}
					target='_blank'
					rel='noopener noreferrer'
					className={`small cursor-clickable text-muted m-0 ${
						!project.githubRepoName ? 'link-disabled' : ''
					}`}
				>
					See Source Code
					<FaAngleRight />
				</a>
			</Card.Footer>
		</Card>
	);
};

Project.propTypes = {
	project: PropTypes.object.isRequired,
};

export default Project;
