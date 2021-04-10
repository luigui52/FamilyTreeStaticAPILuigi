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
							src="https://www.geekgirlauthority.com/wp-content/uploads/2018/05/7773769005_star-wars-1280x640.jpg"
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
							src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/07/star-wars-death-star-earth.jpg"
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
