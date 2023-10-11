import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/Skills.css'
import { Container, Row,Col} from 'react-bootstrap';
import meter95 from '../assets/img/meter1.svg'
import meter80 from '../assets/img/meter2.svg'
import meter90 from '../assets/img/meter3.svg'
import meter70 from '../assets/img/meter70.png'
import meter50 from '../assets/img/meter50.png'
import colorSharp from '../assets/img/color-sharp.png'

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
      return(
        <section className='skill' id='skills'>
          <Container>
            <Row>
              <Col>
              <div className='skill-bx'>
                <h2>Skills</h2>
                <p>I bring a diverse set of skills to the table, ranging from web development and design to software engineering. With a keen eye for detail and a passion for problem-solving, I'm dedicated to creating effective and user-friendly solutions</p>
                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                  <div className='item'>
                    <img src={meter70} alt='Image'/>
                    <h5>JavaScript-NodeJS</h5>
                  </div>
                  <div className='item'>
                    <img src={meter80} alt='Image'/>
                    <h5>ReactJS</h5>
                  </div>
                  <div className='item'>
                    <img src={meter90} alt='Image'/>
                    <h5>CSS-Bootstrap</h5>
                  </div>
                  <div className='item'>
                    <img src={meter80} alt='Image'/>
                    <h5>Java-SpringBoot</h5>
                  </div>
                  <div className='item'>
                    <img src={meter50} alt='Image'/>
                    <h5>Web Development</h5>
                  </div>
                </Carousel>
              </div>
              </Col>
            </Row>
          </Container>
          <img className='background-image-left' src={colorSharp}/>
        </section>
      )

} 

export default Skills