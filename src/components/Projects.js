import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


import Project1 from '../assets/img/Projects/project1.png'
import Project2 from '../assets/img/Projects/project2.png'
import Project3 from '../assets/img/Projects/project3.png'
import Project4 from '../assets/img/Projects/project4.png'
import Certificate from "./Certificate";
import Experience from "./Experience";

export const Projects = () => {

  const projects = [
    {
      title: "Skillvoid",
      description: "Design & Development",
      imgUrl: Project1,
      link: "https://skillvoid.netlify.app"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: Project2,
      link: "https://b-template.netlify.app/"
    },
    {
      title: "ShapeYou",
      description: "Design & Development",
      imgUrl: Project4,
      link: "https://shapeyou.herokuapp.com"
    },
    {
      title: "work-spacee",
      description: "Design & Development",
      imgUrl: Project3,
      link: "https://work-spacee.herokuapp.com"
    },
  ];

  const jobContent = [
    { point: "Took responsibility for building REST APIs with Node.js." },
    { point: "Build SEO dashboard from scratch by using SerpApi." },
    { point: "Established remote deployment using Heroku storage using AWS S3." },
    { point: "Designed and developed SPA with React and Next.js from mockups(PSD)." }
  ]
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Achievement</h2>
                  <p>Imagination is more important than knowledge.  For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.<br /><br /><small>— <i>Albert Einstein</i></small></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item style={{ 'cursor': 'pointer' }}>
                        <Nav.Link eventKey="first">Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item style={{ 'cursor': 'pointer' }}>
                        <Nav.Link eventKey="second">Certificate</Nav.Link>
                      </Nav.Item>
                      <Nav.Item style={{ 'cursor': 'pointer' }}>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
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
                      <Tab.Pane eventKey="second">
                        {/* card for certificate */}
                        <Certificate title={'Server-Side with Nodejs Express with MongoDB'} date={'Issued May 2020 · No Expiration Date'} />
                        <Certificate date={'Issued June 2019 · No Expiration Date'} title={'Front-end web development with React'} />
                        <Certificate title={'Front-end web ui framework and tool:bootstrap 4'} date={'Issued Nov 2020 · No Expiration Date'} />
                        <Certificate title={'Interactivity with javascript'} date={'Issued April 2021 · No Expiration Date'} />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {/* experience */}
                        <Experience jobTitle={'Mern Developer'} company={'Pushideas, Mohali'} time={'May 2021 - Aug 2021 · 4 months'} point={jobContent} />
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
