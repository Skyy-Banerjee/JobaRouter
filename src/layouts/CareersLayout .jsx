import React from 'react';
import { Outlet } from 'react-router-dom';

function CareersLayout() {
	return (
		<div className="creers-layout">
			<h2>Careers</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur,
				dolor.
			</p>
            <Outlet/>
		</div>
	);
}

export default CareersLayout;
