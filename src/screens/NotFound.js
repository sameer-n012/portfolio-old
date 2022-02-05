import React from 'react';
import { Container } from 'react-bootstrap';
import ErrorText from '../components/ErrorText';

const NotFound = () => {
	return (
		<>
			<Container className='main'>
				<ErrorText
					text={'Sorry, that page does not exist.'}
					showButton={true}
				/>
			</Container>
		</>
	);
};

export default NotFound;
