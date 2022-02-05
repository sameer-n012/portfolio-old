import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorText from '../components/ErrorText';
import { getAllBlogs, getFilteredBlogs } from '../resources/blogs';
import BlogSearchForm from '../components/BlogSearchForm';

const Blog = () => {
	const navigate = useNavigate();
	const params = useParams();

	var blogs = [];
	if (params['search']) {
		blogs = getFilteredBlogs(params['search'].split(','));
	} else {
		blogs = getAllBlogs();
	}

	const viewBlog = (id) => {
		navigate(`/blog/${id}`);
	};

	const searchTag = (tag) => {
		navigate(`/blogs/${tag}`);
	};

	return (
		<>
			<Container className='main'>
				{blogs && blogs.length === 0 ? (
					<ErrorText
						text={'Sorry, there are no blogs here.'}
						showButton={true}
					/>
				) : !blogs ? (
					<ErrorText showButton={true} />
				) : (
					<Container
						fluid
						className='align-items-center p-0 d-flex flex-column'
					>
						<BlogSearchForm />
						<Container className='d-flex justify-content-evenly flex-column mt-2'>
							{blogs.map((blog) => (
								<Row key={blog._id}>
									<Container className='bg-light text-dark blog-container mt-3 mb-2'>
										<Container className='d-flex align-items-center mb-2'>
											<h3
												className='me-3 cursor-clickable'
												onClick={() =>
													viewBlog(blog._id)
												}
											>
												{blog.title}
											</h3>
											<h3> | </h3>
											<p className='m-0 ms-3'>
												{blog.date}
											</p>
											<Container className='w-25 me-0 d-flex justify-content-end overflow-text'>
												{!blog.tags
													? ''
													: blog.tags.map((tag) => (
															<small
																key={tag}
																onClick={() =>
																	searchTag(
																		tag
																	)
																}
																className='project-card-tag cursor-clickable'
															>
																{tag}
															</small>
													  ))}
											</Container>
										</Container>
										<hr />

										<p>{blog.featuredBody + '...'}</p>
									</Container>
								</Row>
							))}
						</Container>
					</Container>
				)}
			</Container>
		</>
	);
};

export default Blog;
