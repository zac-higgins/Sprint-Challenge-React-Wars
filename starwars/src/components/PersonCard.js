import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Col } from "reactstrap";
const PersonCard = props => {
    return (
        <Col xs="6" sm="4" key={props.id}>
            <Card>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.species}</CardSubtitle>
                    <CardText>{props.films}</CardText>
                    <CardText>{props.vehicles}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};
export default PersonCard;