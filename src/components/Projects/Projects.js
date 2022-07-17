import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/project-frame.png";
import reactTailwindTemplate from "../../Assets/Projects/react-tailwind-template.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently and other some templates I have.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal portfolio site."
              ghLink="https://github.com/angel-alfonzo/portfolio"
              demoLink="https://portfolio-dun-six-62.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactTailwindTemplate}
              isBlog={false}
              title="React Tailwind Template"
              description="A simple landing page template. This site has been built with react and tailwind."
              ghLink="https://github.com/angel-alfonzo/react-tailwind-template"
              demoLink="https://react-tailwind-template.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
