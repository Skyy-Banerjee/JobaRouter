import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function CareerDetails() {
	const { id } = useParams();
	const career = useLoaderData();

	return (
		<div className="career-details">
			<h2>Career details for {career.title}</h2>
			<p>Starting slary: {career.salary}</p>
			<p>Location: {career.location}</p>
			<div className="details">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
				incidunt ullam magni ab modi nulla! At aspernatur aut aliquam sint ullam
				harum, facere accusamus fugiat omnis excepturi sit. Rem ab delectus
				excepturi quidem quia provident
			</div>
		</div>
	);
}

// Loader fx()
export const careerDetailsLoader = async ({ params }) => {
	const { id } = params;
	const resp = await fetch('http://localhost:4000/careers/' + id)

    if(!resp.ok){
        throw Error('Could not find that career!');
    }


	return resp.json();
};

export default CareerDetails;
