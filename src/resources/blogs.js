const blogs = [
	{
		_id: 0,
		filename: 'blog0.md',
		title: `A new blog post`,
		date: 'February 5, 2022',
		tags: ['first-post', '2022'],
		featuredBody: `As I'm making this portfolio website, I'm still not really sure what 
        I'm ever going to write here. Although theres no shortage of things right now to write about, 
        it feels counter to the idea of this blog to write a paragraph merely`,
	},
];

//takes an array of search tags and returns an array of projects that match the tags
const getFilteredBlogs = (tags) => {
	let filterBlogs = [];

	for (const blog of blogs) {
		let includesAllTags = true;
		for (const tag of tags) {
			if (!blog.tags.includes(tag.toLowerCase())) {
				includesAllTags = false;
			}
		}
		if (includesAllTags) {
			filterBlogs.push(blog);
		}
	}

	return filterBlogs;
};

const getBlogById = (id) => {
	return blogs.find((blog) => blog._id.toString() === id);
};

const getAllBlogs = () => {
	return blogs;
};

export { getBlogById, getAllBlogs, getFilteredBlogs };
