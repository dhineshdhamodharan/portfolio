import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import pdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Container, Row } from "react-bootstrap";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhinesh </span>
            from <span className="purple"> Coimbatore, Tamilnadu.</span>
            <br />
            Motivated designer and developer with experience in creating custom
            websites with ReactJs, JavaScript, HTML5, CSS3, NodeJs, MongoDB.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
        <div style={{ justifyContent: "center", paddingLeft: "200px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="download-button"
          >
            <AiOutlineDownload />
            &nbsp;View Resume
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
