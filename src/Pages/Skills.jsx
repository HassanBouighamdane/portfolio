import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/Skills.css';
import SkillsItems from '../Components/SkillsItems';
import { Container, Row,Col} from 'react-bootstrap';
import meter80 from '../assets/img/meter2.svg';
import meter90 from '../assets/img/meter3.svg';
import meter70 from '../assets/img/meter70.png';
import meter60 from '../assets/img/meter60.png';
import Contact from '../Components/Contact';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';


function Skills(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const skills=[
        {
          imgUrl:meter70,
          title:"Javascript-NodeJS"
        },
        {
          imgUrl:meter80,
          title:"ReactJS"
        },
        {
          imgUrl:meter90,
          title:"CSS-Bootstrap"
        },
        {
          imgUrl:meter70,
          title:"Java-SpringBoot"
        },
        {
          imgUrl:meter70,
          title:"System Administration-Linux"
        },
        {
          imgUrl:meter60,
          title:"Problem Solving"
        },
      ]
      return(
        <>
        <NavBar/>
        <section className='skill' id='skills'>
          <Container>
            <Row>
              <Col>
              <div className='skill-bx'>
                <p>I bring a diverse set of skills to the table, ranging from web development and design to software engineering. With a keen eye for detail and a passion for problem-solving, I'm dedicated to creating effective and user-friendly solutions</p>
                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                  
                  {
                    skills.map((skill,index)=>{
                      return(
                      <SkillsItems 
                      key={index}
                      imgUrl={skill.imgUrl}
                      title={skill.title} />
                      )
                    })
                  }
                    
                </Carousel>
              </div>
              </Col>
            </Row>
          </Container>
          
        </section>
        <Contact/>
        <Footer/>
        </>
      )

} 

export default Skills