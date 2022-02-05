import React from 'react';
import PropTypes from 'prop-types';

const projectDescription = ({ project }) => {
    var rows = []
    for(let i = 0; i < Math.max(project.images.length, project.description.length); i++) {
        rows.push(<Container></Container>)
        if(project.images[i] && project.description[i]) {
            rows.push(
            <Row className='m-2'>
                <Col className='w-50 m-2'>
                    project.description
                </Col>
            </Row>
            )
        }
    }


	return (
		<div>
			<Container></Container>
		</div>
	);
};

projectDescription.propTypes = {
    project: PropTypes.object.isRequired;
};

export default projectDescription;
