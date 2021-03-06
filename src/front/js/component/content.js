import React from "react";
import Content_jpg from "../../img/logo/conten.jpg";
import { Container, Row, Image, Card } from "react-bootstrap";
export const Content = () => {
	return (
		<Container className="mt-4 mb-4" id="AboutContent">
			<Row>
				<div className="d-flex justify-content-end" id="content1">
					<Image className="contentimg col-12 col-md-8" src={Content_jpg} fluid />
					<div className="col-12 col-md-6" id="content2">
						<Card className="Card text-light p-3">
							<blockquote className="blockquote mb-0 card-body">
								<div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
									<p>
										Un pequeño grupo de estudiantes de 4geeks Academy becados por CINDE, desarrolló
										este proyecto para apoyar la iniciativa de quedarnos en casa y ¡porque no
										disfrutar en nuestro paladar un delicioso cóctel!
									</p>

									<footer className="blockquote-footer text-little">
										Primera generación de estudiantes 4Geeks Academy Costa Rica
									</footer>
								</div>
							</blockquote>
						</Card>
					</div>
				</div>
			</Row>
		</Container>
	);
};
