import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "VANIME-REVIEW WEBSITE",
      description: "Vanime is a review website that provides detailed reviews of games and anime. It is developed using PHP, HTML, CSS, JavaScript, and Bootstrap for the frontend, while the backend is powered by PHP and Python's Flask. It uses Html, CSS, JavaScript and Bootstrap for frontend, and it uses PHP and Python’s Flask for backend. ",
      imgUrl: projImg1,
      link:"https://vanime.pythonanywhere.com/",
    },
    {
      title: "CLOUD-BASED CONTENT DELIVERY NETWORK FRAMEWORK",
      description: "This project focuses on designing and implementing a CDN framework that utilizes dynamic cache provisioning to enhance content delivery efficiency. The aim is to optimize resource allocation and improve user experience for content providers. ",
      imgUrl: projImg2,
      link:"https://drive.google.com/drive/folders/1SEq00hcUR7mBkfEhUUnvCrzLXfckavIH?usp=drive_link",
    },
    {
      title: "TRENDS- E-COMMERCE WEBSITE",
      description: "Trends is an e-commerce website created using Python, Django, HTML, and CSS.It provides a platform for users to browse and purchase products online. ",
      imgUrl: projImg3,
      link:"https://github.com/FlynnRyder29/Trends",
    },
    {
      title: "PCfix-BLOGGING WEBSITE",
      description: "PCfix is a blogging website where users can share tips, tricks, and experiences related to maintaining personal computers in good working condition. The website is established using Python, Flask, HTML, CSS, JavaScript, and Bootstrap.||After clicking the link if you encounter an internal error just refresh the page||",
      imgUrl: projImg4,
      link:"https://flynnrider.pythonanywhere.com/",
    },
    {
      title: "ALFRED – VOICE AI ASSISTANT",
      description: "Alfred is a voice-based AI assistant generated using Python, Pyttsx3, and Tkinter. It greets users based on the time of day, can open applications, retrieve information from Wikipedia, play music, and provide interesting facts and jokes. ",
      imgUrl: projImg5,
      link:"https://github.com/FlynnRyder29/AlfredAI",
    },
    {
      title: "Untitled Project",
      description: "In progress",
      imgUrl: projImg3,
      link:"#",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are the Projects I have made with their Title,Descriptions and links.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Updating. Coming Soon</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Updating. Coming Soon.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}