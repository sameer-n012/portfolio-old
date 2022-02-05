import React from 'react';
import { Image, Container, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const ImageViewer = () => {
	const imgurl = useParams()['imgurl'];
	const navigate = useNavigate();

	return (
		<Container className='main'>
			<Container className='d-flex mt-2 position-relative'>
				<Image
					className='w-100 bg-light'
					src={require(`../images/${imgurl}`)}
				/>
				<Button
					className='btn overlay-btn position-absolute'
					variant='outline-dark'
					onClick={() => navigate(-1)}
				>
					Back
				</Button>
			</Container>
		</Container>
	);
};

export default ImageViewer;
