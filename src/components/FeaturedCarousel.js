import React from 'react';
import PropTypes from 'prop-types';
import { Container, Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaAngleRight } from 'react-icons/fa';

const FeaturedCarousel = ({ featuredProjects }) => {
	console.log('featured', featuredProjects);
	return (
		<Container className=''>
			<Carousel>
				{featuredProjects.map((project) => (
					<Carousel.Item key={project._id}>
						<img
							className='featured-carousel-img d-block'
							src={`images/${
								project.images[0]
									? project.images[0]
									: 'defaultImage.png'
							}`}
							alt={project.name}
						/>
						<Carousel.Caption>
							<h3>{project.name}</h3>
							<LinkContainer
								className='cursor-clickable'
								to={`/projects/${project._id}`}
							>
								<p>
									See More <FaAngleRight />
								</p>
							</LinkContainer>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</Container>
	);
};

FeaturedCarousel.propTypes = {
	featuredProjects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeaturedCarousel;
