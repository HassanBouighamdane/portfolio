
import { Row,Col } from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import myImg from '../assets/img/Personal-image.jpg';
import { useEffect,useState } from "react";


function Banner(){
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "Software Engineer" ];
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
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>{`Hi I'm Hassan Bouighamdane a ` }<span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer", "Software Engineer" ]'><span className="wrap">{text}</span></span></h1>
                    <p>My description</p>
                    <button onClick={()=>console.log('connect')}>Let's connect<ArrowRightCircle size={25}  /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={myImg} alt="myimage"/>
                </Col>
            </Row>


        </section>
        )
        
}

export default Banner