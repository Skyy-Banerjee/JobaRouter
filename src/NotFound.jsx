import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div>
			<h2>404... Page not found!</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cum quae
				necessitatibus fugiat, hic quaerat tenetur quo quasi praesentium
				repellendus magni maiores velit deleniti dignissimos laudantium id
				dolores ullam provident totam quia excepturi quibusdam aperiam numquam
				blanditiis. Consectetur, aperiam est?
			</p>

			<p>
				Go to the <Link to="/">Homepage</Link>.
			</p>
		</div>
	);
}

export default NotFound;
