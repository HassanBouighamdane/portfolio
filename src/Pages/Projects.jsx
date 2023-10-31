import '../styles/Projects.css';
import portfolioImg from '../assets/img/project img/portfolio.jpg';
import PlagiarismImg from '../assets/img/project img/plagiat.jpg';
import stockAppImg from '../assets/img/project img/stockManagement.jpg';
import restaurantImg from '../assets/img/project img/Restaurant.jpg';
import { Col, Container, Row,Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from '../Components/ProjectCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'

function Projects(){

    const projects=[

      {
        title:"Restaurant Reservation",
        description:"HTML ,CSS and PHP",
        imgUrl:restaurantImg,
        githubLink:"https://github.com/HassanBouighamdane/RestaurantReservation",
        projectLink:"#"
    },
      
        {
            title:"Portfolio WebSite",
            description:"ReactJS and EmailJS ",
            imgUrl:portfolioImg,
            githubLink:"https://github.com/HassanBouighamdane/portfolio",
            projectLink:"https://hassanbouighamdane.github.io/portfolio/"
        },
        {
            title:"Plagiarism Detection",
            description:"ReactJS and SpringBoot ",
            imgUrl:PlagiarismImg,
            githubLink:"https://github.com/HassanBouighamdane/PlagiarismDetection",
            projectLink:"#"
        },
        {
            title:"Stock Management App",
            description:"Java, JavaFx, MySQL ",
            imgUrl:stockAppImg,
            githubLink:"https://github.com/HassanBouighamdane/StockManagementApp",
            projectLink:"#"
        },

        
         
    ];
    return(
      <>
      <NavBar/>
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <p>This is the list of some projects I realise  </p>
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""} >
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
                        <p>Stay tuned for more projects</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Stay tuned for more projects</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>

                  </div>}
            </TrackVisibility>
                    </Col>

                </Row>
            </Container>
            
        </section>
        <Contact/>
        <Footer/>
        </>
    )

}
export default Projects