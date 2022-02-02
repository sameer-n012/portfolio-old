import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileDetails from '../resources/myProfile';

const Footer = () => {
	return (
		<Container
			style={{ color: 'white' }}
			className='footer bg-dark w-100 mw-100 d-flex m-0 p-4'
		>
			<Container className=' w-50 d-flex align-items-center'>
				<a
					className='footer-social-icon m=0 ms-2 not-link cursor-clickable'
					href={profileDetails.githubLink}
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaGithub />
				</a>
				<a
					className='footer-social-icon m=0 ms-2 not-link cursor-clickable'
					href={profileDetails.linkedinLink}
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaLinkedin />
				</a>
				<a
					className='footer-social-icon m=0 ms-2 not-link cursor-clickable'
					mailto={profileDetails.email}
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaEnvelope />
				</a>
				<p className='m-0 ms-2'>|</p>
				<a
					className='m=0 ms-2 not-link cursor-clickable'
					href='https://github.com/sameer-n012/portfolio'
					target='_blank'
					rel='noopener noreferrer'
				>
					Project Source Code
				</a>
			</Container>
			<Container className='w-50 me-0 ms-0 float-right d-flex justify-content-end w-50'>
				<Container className='w-25 d-flex justify-content-end m-0 ms-auto'>
					Attribution:
				</Container>
				<Container className='w-25 d-flex flex-column m-0'>
					<a
						className='not-link cursor-clickable'
						href='https://fontawesome.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						FontAwesome
					</a>
				</Container>
			</Container>
		</Container>
	);
};

export default Footer;
