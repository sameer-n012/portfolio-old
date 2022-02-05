import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const ProjectSearchForm = () => {
	const params = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const [formFields, setFormFields] = useState({
		search: params['search'] ? params['search'].split(',').join(' ') : '',
	});

	useEffect(() => {
		setFormFields({
			search: params['search']
				? params['search'].split(',').join(' ')
				: '',
		});
	}, [location.pathname, params]);

	const submitSearch = (event) => {
		event.preventDefault();
		const searchTags = formFields.search.split(' ').join(',');
		navigate(`/projects/${searchTags}`);
	};

	const clearSearch = (event) => {
		event.preventDefault();
		setFormFields({
			search: '',
		});
		navigate(`/projects`);
	};

	const handleChange = (event) => {
		const searchRegex = /^[A-Za-z0-9 -]*$/g;
		if (event.target.name === 'search') {
			if (!searchRegex.test(event.target.value)) {
				return;
			}
		}
		setFormFields({
			...formFields,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<Form
			onSubmit={(e) => submitSearch(e)}
			className='mt-4 mb-4 w-75 d-flex'
		>
			<Form.Control
				type='text'
				placeholder='Search by tags'
				name='search'
				value={formFields.search}
				onChange={(e) => handleChange(e)}
			/>
			<Button
				type='submit'
				variant='outline-light'
				onClick={(e) => submitSearch(e)}
				className='ms-2 btn'
			>
				Search
			</Button>
			<Button
				type='submit'
				variant='outline-light'
				onClick={(e) => clearSearch(e)}
				className='ms-2 btn'
			>
				Clear
			</Button>
		</Form>
	);
};

export default ProjectSearchForm;
