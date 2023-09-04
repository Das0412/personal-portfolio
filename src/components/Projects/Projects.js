import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quickquiz from "../../Assets/Projects/quickquiz.png";
import ehealthcare from "../../Assets/Projects/ehealthcare.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ehealthcare}
              isBlog={false}
              title="e-Healthcare"
              description="Welcome to our eHealthcare platform, where your well-being is our top priority! Our user-friendly website is designed to provide you with convenient access to a wide range of healthcare services and information from the comfort of your home."
              ghLink="https://das0412.github.io/ehealthcare/"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickquiz}
              isBlog={false}
              title="QuickQuiz"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://das0412.github.io/quick-quiz/"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
