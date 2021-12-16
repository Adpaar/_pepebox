import React from "react";
import { Col, Card } from "react-bootstrap";

export default function CardU(props) {
  return (
    <Col>
      <Card className="caard" style={{ width: "18rem" }}>
        <Card.Img src={props.image} />
        <Card.Body className="card-body">
          <Card.Title className="caard-h2">{props.title}</Card.Title>
          <Card.Text className="caard-p">{props.text}</Card.Text>
          <Card.Text className="caard-h5">{props.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
