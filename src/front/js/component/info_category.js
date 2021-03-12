import React, { useContext } from "react";
//import { Context } from "../store/appContext";
import { Container, Row, Col, Image, Card, Media, Button, Link } from "react-bootstrap";
import "../../styles/info_category.scss";

export const Info_Category = () => {
	return (
		<Container>
			<Row>
				<Card id="cardid">
					<Media>
						<Col xs={6} md={4}>
							<img
								className="mr-I"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFaVw6IQbSpeDIH7oeJ8DF5yD0A35u5onlA&usqp=CAU"
								alt="Generic placeholder"
							/>
						</Col>
						<Media.Body>
							<Col>
								<h5>Media Heading</h5>
								<p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
									sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
									turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
									felis in faucibus.
								</p>
								<Button variant="outline-info" href="/">
									Deseo ir a esta categoría
								</Button>
							</Col>
						</Media.Body>
					</Media>
				</Card>

				<Card id="cardid">
					<Media>
						<Media.Body>
							<Col>
								<h5>Media Heading</h5>
								<p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
									sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
									turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
									felis in faucibus.
								</p>
								<Button variant="outline-info" href="/">
									Deseo ir a esta categoría
								</Button>
							</Col>
						</Media.Body>
						<Col xs={6} md={4}>
							<img
								className="mr-D"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFaVw6IQbSpeDIH7oeJ8DF5yD0A35u5onlA&usqp=CAU"
								alt="Generic placeholder"
							/>
						</Col>
					</Media>
				</Card>

				<Card id="cardid">
					<Media>
						<Col xs={6} md={4}>
							<img
								className="mr-I"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFaVw6IQbSpeDIH7oeJ8DF5yD0A35u5onlA&usqp=CAU"
								alt="Generic placeholder"
							/>
						</Col>
						<Media.Body>
							<Col>
								<h5>Media Heading</h5>
								<p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
									sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
									turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
									felis in faucibus.
								</p>
								<Button variant="outline-info" href="/">
									Deseo ir a esta categoría
								</Button>
							</Col>
						</Media.Body>
					</Media>
				</Card>
				<Card id="cardid">
					<Media>
						<Media.Body>
							<Col>
								<h5>Media Heading</h5>
								<p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
									sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
									turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
									felis in faucibus.
								</p>
								<Button variant="outline-info" href="/">
									Deseo ir a esta categoría
								</Button>
							</Col>
						</Media.Body>
						<Col xs={6} md={4}>
							<img
								className="mr-D"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFaVw6IQbSpeDIH7oeJ8DF5yD0A35u5onlA&usqp=CAU"
								alt="Generic placeholder"
							/>
						</Col>
					</Media>
				</Card>

				<Card id="cardid">
					<Media>
						<Col xs={6} md={4}>
							<img
								className="mr-I"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFaVw6IQbSpeDIH7oeJ8DF5yD0A35u5onlA&usqp=CAU"
								alt="Generic placeholder"
							/>
						</Col>
						<Media.Body>
							<Col>
								<h5>Media Heading</h5>
								<p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
									sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
									turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
									felis in faucibus.
								</p>
								<Button variant="outline-info" href="/">
									Deseo ir a esta categoría
								</Button>
							</Col>
						</Media.Body>
					</Media>
				</Card>

				<Card id="cardid">
					<Media>
						<Media.Body>
							<Col>
								<h5>Media Heading</h5>
								<p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
									sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
									turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
									felis in faucibus.
								</p>
								<Button variant="outline-info" href="/">
									Deseo ir a esta categoría
								</Button>
							</Col>
						</Media.Body>
						<Col xs={6} md={4}>
							<img
								className="mr-D"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFaVw6IQbSpeDIH7oeJ8DF5yD0A35u5onlA&usqp=CAU"
								alt="Generic placeholder"
							/>
						</Col>
					</Media>
				</Card>
			</Row>
		</Container>
	);
};