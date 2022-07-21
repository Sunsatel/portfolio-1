import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/project-frame.png";
import reactTailwindTemplate from "../../Assets/Projects/react-tailwind-template.png";
import nextjsChakraUIPortfolio from "../../Assets/Projects/nextjs-chakraui-portfolio2.png";
import vueTemplate from "../../Assets/Projects/vue-template-frame.png";
import nextjsTemplate from "../../Assets/Projects/nextjs-template-frame.png";

function Projects() {
  const projects = [
    {
      imgPath: portfolio,
      title: 'Portfolio',
      description: 'My personal portfolio site.',
      ghLink: 'https://github.com/angel-alfonzo/portfolio',
      demoLink: 'https://portfolio-dun-six-62.vercel.app'
    },
    {
      imgPath: reactTailwindTemplate,
      title: 'React Tailwind Template',
      description: 'A simple landing page template. This site has been built with react and tailwind.',
      ghLink: 'https://github.com/angel-alfonzo/react-tailwind-template',
      demoLink: 'https://react-tailwind-template.vercel.app'
    },
    {
      imgPath: nextjsChakraUIPortfolio,
      title: 'NextJS ChakraUI Portfolio',
      description: 'This is a simple ChakraUI portfolio template. This site has been built with NextJS. You can use this template for your personal portfolio site.',
      ghLink: 'https://github.com/angel-alfonzo/nextjs-chakra-ui-portfolio-template',
      demoLink: 'https://nextjs-chakra-ui-portfolio-template-eta.vercel.app'
    },
    {
      imgPath: vueTemplate,
      title: 'Vue Dashboard Template',
      description: 'This is a simple Vue dashboard template. You can use this template for your website.',
      ghLink: 'https://github.com/angel-alfonzo/vue_template',
      demoLink: 'https://armour.github.io/vue-typescript-admin-template'
    },
    {
      imgPath: nextjsTemplate,
      title: 'NextJS Template',
      description: 'This is a simple NextJS template. You can use this template for your website. As a server-side rendering framework, NextJS is good at website render',
      ghLink: 'https://github.com/angel-alfonzo/nextjs-template1',
      demoLink: 'https://nextjs-template1.vercel.app'
    }
  ]
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
          {projects.map((project, idx) => <Col md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
