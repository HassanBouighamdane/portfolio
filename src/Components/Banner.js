import { Row,Col } from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import myImg from '../assets/img/Personal-image.jpg';
import { useEffect,useState } from "react";
import '../styles/Banner.css'
import 'animate.css';
import TrackVisibility from 'react-on-screen';


function Banner(){
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [  "Software Engineer","Web Developer", "Web Designer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
    
        return (

            <section className="banner" id="home">
            <Row className="align-items-center">
            <Col xs={12} md={6} xl={5}>
              <div className="centered-content"><img src={myImg} alt="myimage"/></div>
                    
                </Col>
                <Col className="welcome-text" xs={12} md={6} xl={7}>
                  <TrackVisibility>
                  {({ isVisible }) =>
                  <div  className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <div className="centered-content">
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`I'm Hassan Bouighamdane a `}<span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer", "Software Engineer" ]'><span className="wrap">{text}</span></span></h1>
                        <p>I'm a Software Engineering Student at National Institute of Postes and Telecommunications (INPT-Rabat). I have a passion for web development, web design, and I enjoy solving problems using Java.</p>
                          <a href="#"><button>My Cv<ArrowRightCircle size={25} /></button></a>
        </div>
                    </div>}
                    </TrackVisibility>
                </Col>
                
            </Row>


        </section>
        )
        
}

export default Banner