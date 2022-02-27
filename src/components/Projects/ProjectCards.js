import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          variant="primary"
          href={props.link}
          target="_blank"
          className="download-button"
        >
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
      <Card.Body>
        <Button
          variant="primary"
          href={props.git}
          target="_blank"
          className="download-button"
        >
          <AiFillGithub className="" />
          &nbsp;
          {props.isBlog ? "View Blog" : "View Code"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;