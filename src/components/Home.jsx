import React from "react";
import { Button, Card } from "react-bootstrap";

const Home = ({ blogs }) => {
  return (
    <div className="container d-flex justify-content-between flex-wrap">
      {blogs.map((item) => (
        <Card key={item.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} height={300} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.category}</Card.Text>
            <Card.Text>{item.info}</Card.Text>
            <Button variant="primary">Edit</Button>
            <Button variant="primary">Details</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
