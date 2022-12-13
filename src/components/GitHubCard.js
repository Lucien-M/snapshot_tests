import React from "react";
import Card from "react-bootstrap/Card";
import Gallery from "./Gallery.jpg";

function GitHubCard() {
  return (
    <div className="card">
      <Card style={{ width: "18rem", margin: "10px auto" }}>
        <Card.Img
          style={{ width: "200px", height: "150px" }}
          variant="top"
          src={Gallery}
        />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>Lucien-M</Card.Title>
          <Card.Text>
            I am a soccerball fan, I love sciences and gospel music. Coding is
            my passion although I am new!
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GitHubCard;
