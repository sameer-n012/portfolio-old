import React, { useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import profileDetails from '../resources/myProfile';
import ErrorText from '../components/ErrorText';

const About = () => {
	useEffect(() => {
		const script = document.createElement('script');

		script.src = 'https://platform.linkedin.com/badges/js/profile.js';
		script.async = true;
		script.defer = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<Container className='main'>
			{!profileDetails ? (
				<ErrorText showButton={true} />
			) : (
				<Container className='m-2 text-light d-flex mt-5'>
					<Col
						className='text-light w-50 d-flex flex-column justify-content-center'
						style={{ lineHeight: '2.5' }}
						// style={{ borderBottom: '2px solid white' }}
					>
						<h2>About Me</h2>
						<p>
							&emsp;&emsp;&emsp;
							{profileDetails.aboutMeDescription}
						</p>
					</Col>
					<Col className='w-50 d-flex justify-content-center'>
						<img
							className='img-me'
							alt='me'
							src={require(`../images/me.jpg`)}
						></img>
					</Col>
					{/* <Container
						className='text-light'
						style={{ borderBottom: '2px solid white' }}
					>
						<h2>Connections</h2>
						<p>See more at </p>
						<div
							class='badge-base LI-profile-badge'
							data-locale='en_US'
							data-size='medium'
							data-theme='dark'
							data-type='VERTICAL'
							data-vanity='sameer-narendran-84825318a'
							data-version='v1'
						>
							<a
								class='badge-base__link LI-simple-link'
								href='https://www.linkedin.com/in/sameer-narendran-84825318a?trk=profile-badge'
							>
								Sameer Narendran
							</a>
						</div>
					</Container> */}
				</Container>
			)}
		</Container>
	);
};

export default About;
