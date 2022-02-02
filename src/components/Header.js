import React from 'react';
import PropTypes from 'prop-types';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import profileDetails from '../resources/myProfile';

const Header = ({ title }) => {
	return (
		<Container className='header m-0 p-0 w-100 mw-100 d-flex flex-row text-align-center'>
			<Navbar className='w-100 p-4' bg='dark' variant='dark' expand='sm'>
				<Container className='d-flex justify-content-spread'>
					<LinkContainer to='/'>
						<Navbar.Brand>Sameer Narendran</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse
						id='basic-navbar-nav'
						className='justify-content-end flex-grow-0'
					>
						<Nav className='me-auto'>
							<LinkContainer to='/projects'>
								<Nav.Link>Projects</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/about'>
								<Nav.Link>About Me</Nav.Link>
							</LinkContainer>
							<NavDropdown
								title='Connections'
								id='basic-nav-dropdown'
							>
								<NavDropdown.Item
									href={profileDetails.resumeLink}
									target='_blank'
									rel='noopener noreferrer'
									disabled={!profileDetails.resumeLink}
								>
									Resume
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item
									href={profileDetails.githubLink}
									target='_blank'
									rel='noopener noreferrer'
									disabled={!profileDetails.githubLink}
								>
									GitHub
								</NavDropdown.Item>
								<NavDropdown.Item
									href={profileDetails.linkedinLink}
									target='_blank'
									rel='noopener noreferrer'
									disabled={!profileDetails.linkedinLink}
								>
									LinkedIn
								</NavDropdown.Item>
								<NavDropdown.Item
									mailto={profileDetails.email}
									target='_blank'
									rel='noopener noreferrer'
									disabled={!profileDetails.email}
								>
									Email
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
