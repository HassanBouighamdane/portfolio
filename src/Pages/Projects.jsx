import '../styles/Projects.css';
import PlagiarismImg from '../assets/img/project img/plagiat.jpg';
import stockAppImg from '../assets/img/project img/stockManagement.jpg';
import restaurantImg from '../assets/img/project img/Restaurant.jpg';
import { Col, Container, Row, Tab } from 'react-bootstrap';
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
                    <Tab.Container id="projects-tabs">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""} >
                    
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