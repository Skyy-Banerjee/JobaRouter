import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

function Careers() {
	const careers = useLoaderData();
	return (
		<div className="careers">
			{careers.map((career) => (
				<Link to={career.id.toString()} key={career.id}>
					<p>
						<strong>{career.title}</strong>
					</p>
					<p>
						<i>Based in {career.location}</i>
					</p>
				</Link>
			))}
		</div>
	);
}

// Loader fx()

export const careersLoader = async () => {
	const resp = await fetch('http://localhost:4000/careers');
	
	if(!resp.ok){
		throw new Error('Could not fetch CAREERS!')
	}
	return resp.json();
};

export default Careers;
