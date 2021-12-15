import React from "react";
import { Col, Card } from "react-bootstrap";

export default function CardU(props) {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Card.Text>{props.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
