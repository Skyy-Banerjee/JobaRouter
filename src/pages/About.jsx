import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function About() {
	const [user, setUser] = useState('Mario');
	if (!user) {
		return <Navigate to="/" replace={true}/>;
	}
	return (
		<div className="about">
			<h2>About Us</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a
				temporibus adipisci nulla tenetur, molestiae blanditiis soluta repellat
				reprehenderit fugiat est voluptatem exercitationem vero recusandae iusto
				voluptatibus eos nihil atque repudiandae, dicta facere. Eveniet laborum
				autem quae quas fugit doloremque.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
				magni ducimus sequi debitis dignissimos impedit consequatur! Facere
				doloribus nihil ut, praesentium unde atque cupiditate repellat commodi
				veniam eum. Amet doloribus error velit est laboriosam cum, placeat quasi
				eos molestias necessitatibus!
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
				maxime commodi recusandae placeat quidem neque tempore, quis
				perspiciatis est doloribus earum architecto nulla repellendus odio
				facilis sint vel aut, voluptates modi ipsa. Voluptatum, ipsa. Voluptates
				hic consequuntur nemo ipsa sequi.
			</p>
			<button onClick={() => setUser(null)}>LogOut</button>
		</div>
	);
}

export default About;
