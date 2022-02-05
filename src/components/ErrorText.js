import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ErrorText = ({ text, showButton }) => {
	const navigate = useNavigate();

	return (
		<Container className='d-flex flex-column'>
			<p className='text-light ms-auto me-auto text-center'>{text}</p>
			{showButton ? (
				<Button
					variant='outline-light'
					onClick={() => navigate(-1)}
					className='ms-auto me-auto btn'
				>
					Back
				</Button>
			) : (
				<></>
			)}
		</Container>
	);
};

ErrorText.defaultProps = {
	text: 'Sorry, something went wrong.',
	showButton: true,
};

ErrorText.propTypes = {
	text: PropTypes.string,
	showButton: PropTypes.bool,
};

export default ErrorText;
