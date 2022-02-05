import React from 'react';
import PropTypes from 'prop-types';
import { Image, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ImageGallery = ({ project }) => {
	const navigate = useNavigate();

	if (project.images.length === 0) {
		return (
			<Container fluid className='d-flex flex-wrap mt-3'>
				<p>Sorry, there are no images for this project</p>
			</Container>
		);
	}

	return (
		<Container
			fluid
			className='d-flex flex-wrap justify-content-center mt-3'
		>
			{project.images.map((image) => (
				<Image
					src={require(`../images/${
						image ? image : 'defaultImage.png'
					}`)}
					onClick={() => navigate(`/img/${image}`)}
					className='gallery-image bg-light'
					key={image}
				/>
			))}
		</Container>
	);
};

ImageGallery.propTypes = {
	project: PropTypes.object.isRequired,
};

export default ImageGallery;
