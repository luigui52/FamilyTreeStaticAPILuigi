import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<Container>
			<Carousel>
				<Carousel.Item>
					<Link to="/characters">
						<img
							className="d-block w-100"
							src="https://images4.alphacoders.com/673/thumb-1920-673740.jpg"
							alt="Characters"
						/>
					</Link>
					<Carousel.Caption>
						<h3>Characters</h3>
						<p>Find Your Favorites Star Wars Characters</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Link to="/planetsView">
						<img
							className="d-block w-100"
							src="https://i.pinimg.com/originals/a7/95/96/a79596bdf26a00f6eda7e9e4d10c1e6c.jpg"
							alt="planets"
						/>
					</Link>
					<Carousel.Caption>
						<h3>Planets</h3>
						<p>Have a Look at The Names of The Planets</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};
