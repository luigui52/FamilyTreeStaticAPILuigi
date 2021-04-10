import React, { useContext } from "react";
import { Dropdown, Container, DropdownButton, Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Menu = () => {
	const { store, actions } = useContext(Context); //Se trae de store todas las acciones de fetch

	return (
		<Container>
			<Navbar bg="light">
				<Link to="/">
					<Navbar.Brand href="#home">
						<img
							src="https://i.vippng.com/png/small/1-13769_star-wars-logo-star-wars-logo-gold.png"
							width="120"
							height="100"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
				</Link>
				<Navbar.Collapse className="justify-content-end">
					<DropdownButton
						id="dropdown-basic-button"
						variant="dark"
						title={"Favorites " + store.favorites.length}>
						{store.favorites.length == 0 ? (
							<Dropdown.Item>Empty</Dropdown.Item>
						) : (
							store.favorites.map((favorite, i) => {
								return (
									<Dropdown.Item eventKey={i} key={i} onClick={() => actions.deleteFavorite(i)}>
										{favorite.type == "people" ? (
											<div>
												<i className="fas fa-id-card">
													&nbsp;
													{favorite.name}
												</i>
												&nbsp;&nbsp;&nbsp;
												<i className="far fa-trash-alt" />
											</div>
										) : (
											<div>
												<i className="fas fa-globe-americas">
													&nbsp;
													{favorite.name}
												</i>
												&nbsp;&nbsp;&nbsp;
												<i className="far fa-trash-alt" />
											</div>
										)}
									</Dropdown.Item>
								);
							})
						)}
					</DropdownButton>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};
