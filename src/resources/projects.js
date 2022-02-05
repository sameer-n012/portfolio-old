const projects = [
	{
		_id: 0,
		name: 'Portfolio Website',
		description: `A website built using JavaScript and React to showcase my past programming work. 
            It has links to my resume, email address, GitHub, and LinkedIn 
            and contains descriptions and images of many of the projects I have worked on in the past.`,
		githubRepoName: 'portfolio',
		images: [
			'portfolio0.PNG',
			'portfolio1.PNG',
			'portfolio2.PNG',
			'portfolio3.PNG',
			'portfolio4.PNG',
		],
		tags: [
			'javascript',
			'react',
			'bootstrap',
			'web-design',
			'web-development',
			'design',
		],
		featured: false,
	},
	{
		_id: 1,
		name: 'Food Review',
		description: `A web application that allows users to sign up with an account in order to create, edit, and share reviews of menu items at restaurants.
                    Users can search through their own and other users' reviews, upload images of the food, and modify or delete their account.
                    This application was built using a React/Redux front-end, NodeJS, Express, and MongoDB as the database.`,
		githubRepoName: 'food-review',
		images: [
			'foodreview0.jpg',
			'foodreview1.PNG',
			'foodreview2.PNG',
			'foodreview3.PNG',
			'foodreview4.PNG',
			'foodreview5.PNG',
			'foodreview6.PNG',
		],
		tags: [
			'full-stack',
			'react',
			'redux',
			'javascript',
			'bootstrap',
			'mongodb',
			'express',
			'nodejs',
			'web-development',
		],
		featured: true,
	},
	{
		_id: 2,
		name: 'Fish Weight Regression',
		description: `A group project created to perform multilinear regression on the sizes of fish in order to 
                    determine the weight of the fish. We used the Python library sk-learn in order to perform linear 
                    regression on the data using the ridge regularization technique and graphed our results
                    using the Python library Matplotlib. Overall, we achieved a low mean squared error and accurate
                    predictions.`,
		githubRepoName: '',
		images: [
			'fishmarket0.png',
			'fishmarket1.png',
			'fishmarket2.png',
			'fishmarket6.PNG',
			'fishmarket3.png',
			'fishmarket5.PNG',
			'fishmarket4.png',
		],
		tags: [
			'python',
			'sk-learn',
			'linear-regression',
			'machine-learning',
			'matplotlib',
			'numpy',
			'pandas',
		],
		featured: false,
	},
	{
		_id: 3,
		name: 'ResNet152 V2 Car Classification ',
		description: `A group project where we used a dataset of images of cars and attempted to classify them 
                    by model using transfer learning with different pre-established neural network models. 
                    After testing different models, we decided to use ResNet152 V2 which appeared to have 
                    the highest accuracy and fine-tuned the model parameters to achieve better results on
                    the dataset. Overall, we achieved an accuracy of 77% on the test data.`,
		githubRepoName: '',
		images: [
			'resnetcars5.PNG',
			'resnetcars3.png',
			'resnetcars0.PNG',
			'resnetcars1.PNG',
			'resnetcars2.png',
			'resnetcars4.PNG',
		],
		tags: [
			'python',
			'tensorflow',
			'transfer-learning',
			'neural-network',
			'machine-learning',
			'keras',
			'numpy',
		],
		featured: true,
	},
	{
		_id: 4,
		name: 'Employee Management Application',
		description: `A Java application that was made to manage employees in a company. Using this, 
                    a company administrator can add and remove employees, add notes and wages, and schedule 
                    employees. Employees can sign in to see notes and add logs during their shift, 
                    which the administrator can verify.`,
		githubRepoName: '',
		images: ['ema0.PNG', 'ema1.PNG', 'ema2.PNG', 'ema3.PNG', 'ema4.PNG'],
		tags: [
			'java',
			'jdbc',
			'java-swing',
			'sql',
			'object-oriented',
			'employee-management',
		],
		featured: true,
	},
];

//takes an array of search tags and returns an array of projects that match the tags
const getFilteredProjects = (tags) => {
	let filterProjects = [];

	for (const project of projects) {
		let includesAllTags = true;
		for (const tag of tags) {
			if (!project.tags.includes(tag.toLowerCase())) {
				includesAllTags = false;
			}
		}
		if (includesAllTags) {
			filterProjects.push(project);
		}
	}

	return filterProjects;
};

//gets all projects in the list
const getAllProjects = () => {
	return projects;
};

const getProjectById = (id) => {
	return projects.find((project) => project._id.toString() === id);
};

export { getFilteredProjects, getAllProjects, getProjectById };
