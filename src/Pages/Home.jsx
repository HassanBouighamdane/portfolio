import { Row,Col } from "react-bootstrap";
import { ArrowDownCircle} from "react-bootstrap-icons";
import myImg from '../assets/img/Personal-image.jpg';
import { useEffect,useState } from "react";
import cv from '../assets/CV.pdf'
import '../styles/Home.css'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'


function Home(){
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const [index, setIndex] = useState(1);
    const toRotate = [  "Software Engineering","Web Developement", "Web Design","Database Administration","Java Programming" ];
    const period = 500;
  
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
        setDelta(100);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
    
        return (

          <>
          <NavBar/>
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
                        
                        <h1>{`Hi, I'm Hassan Bouighamdane `}</h1>
                        <p>A Software Engineering Student at National Institute of Postes and Telecommunications (INPT-Rabat). I have a passion for web development, web design, and I enjoy solving problems using Java.</p>
                        <h2>{`I'm into `}<span className="txt-rotate" dataperiod="1000" ><span className="wrap">{text}</span></span>.</h2>
                          <a href={cv}><button>My Resume<ArrowDownCircle size={25} /></button></a>
        </div>
                    </div>}
                    </TrackVisibility>
                </Col>
                
            </Row>
        </section>
        <Contact/>
        <Footer/>

        </>
        )
        
}

export default Home