import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { getBlogById } from '../resources/blogs';
import ErrorText from '../components/ErrorText';
import ReactMarkdown from 'react-markdown';

const BlogDetails = () => {
	const navigate = useNavigate();

	const blog = getBlogById(useParams()['id']);

	const [blogBody, setBlogBody] = useState('');

	const searchTag = (tag) => {
		navigate(`/blogs/${tag}`);
	};

	const fetchText = fetch(require(`../blogs/${blog.filename}`))
		.then((r) => r.text())
		.then((text) => {
			return text;
		});

	useEffect(() => {
		const getText = async () => {
			const text = await fetchText;
			setBlogBody(text);
		};

		getText();
	}, [fetchText]);

	//console.log('a', getText());
	return (
		<>
			<Container className='main'>
				{!blog ? (
					<ErrorText
						text={'Sorry, this blog does not exist.'}
						showButton={true}
					/>
				) : (
					<Container
						fluid
						className='mt-5 mb-5 d-flex flex-column align-items-center'
					>
						<Container className='text-light m-2 mb-4'>
							<Button
								variant='outline-light'
								onClick={() => navigate(-1)}
								className='btn'
							>
								Back
							</Button>
						</Container>
						<Container
							style={{ borderBottom: '2px solid white' }}
							className='text-light pb-2 m-2 w-75 align-items-center'
						>
							<Container className='d-flex align-items-center'>
								<h1 className='me-3'>{blog.title}</h1>
								<h2> | </h2>
								<p className='m-0 ms-3'>{blog.date}</p>
							</Container>
							<div className='mb-2 d-flex flex-wrap'>
								{blog.tags.map((tag) => (
									<small
										key={tag}
										onClick={() => searchTag(tag)}
										className='project-card-tag cursor-clickable mb-2'
									>
										{tag}
									</small>
								))}
							</div>
						</Container>
						<Container
							className='text-light mt-4 w-75 ps-5 pe-5'
							style={{ lineHeight: '2.5' }}
						>
							<ReactMarkdown
								disallowedElements={['h1', 'h2']}
								linkTarget={'_blank'}
								className='blog-body-text'
							>
								{blogBody ? blogBody : ''}
							</ReactMarkdown>
						</Container>
					</Container>
				)}
			</Container>
		</>
	);
};

export default BlogDetails;
