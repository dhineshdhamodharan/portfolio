import React from "react";
import { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../SocialMedia";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function ContactCard() {
  const [serverState, setServerState] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState(true);
    console.log(name);
    console.log(mail);
    console.log(message);
    try {
      await axios.post("https://formspree.io/f/xbjqelql", {
        name: name,
        mail: mail,
        message: message,
      });
      setServerState(false);
    } catch (error) {
      setServerState(false);
      console.log(error);
    }
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                <strong>Feel free to connect with me</strong>
              </p>
            </Col>
            <SocialMedia />
          </Row>
        </Container>

        <div className="container" id="Contact">
          <form onSubmit={handleSubmit} className="form">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="Name"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setMail(e.target.value);
                }}
                required
              />
            </div>

            <div class="form-group">
              <textarea
                class="form-control"
                rows="5"
                placeholder="Enter your message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div class="form-group">
              <Button
                type="submit"
                class=" btn1 btn-primary"
                disabled={serverState}
                className="download-button"
              >
                &nbsp;Send message
              </Button>
            </div>
            {serverState ? <p>Message Sent Successfully</p> : ""}
          </form>
        </div>
      </Container>
    </section>
  );
}

export default ContactCard;
