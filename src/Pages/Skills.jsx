import 'react-multi-carousel/lib/styles.css';
import '../styles/Skills.css';
import { Container, Row,Col} from 'react-bootstrap';
import Contact from '../Components/Contact';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';


function Skills(){
    

      const skills = [
        /**frontend */
        {
          imgUrl: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
          title: "HTML",
          type: "Frontend",
        },
        {
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
          title: "CSS",
          type: "Frontend",
        },
        {
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
          title: "Bootstrap",
          type: "Frontend",
        },
        {
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          title: "ReactJS",
          type: "Frontend",
        },
        {
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
          title: "Tailwand CSS",
          type: "Frontend",
        },
        /**backend */
        {
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
          title: "Node.js",
          type: "Backend",
        },
        {
          imgUrl: "https://atomrace.com/blog/wp-content/uploads/2018/05/spring-boot-logo.png",
          title: "Spring Boot",
          type: "Backend",
        },
        {
          imgUrl: "https://kinsta.com/wp-content/uploads/2022/04/express-1.png",
          title: "Express JS",
          type: "Backend",
        },

        /**Programming laguages */

        {
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
          title: "Javascript",
          type: "Programming Language",
        },
        
        {
          imgUrl: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
          title: "Java",
          type: "Programming Language",
        },
        {
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png",
          title: "Python",
          type: "Programming Language",
        },
        
        
       
        /**Database */
        {
          imgUrl: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png",
          title: "MySQL",
          type: "Database",
        },
        {
          imgUrl: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png",
          title: "MongoDB",
          type: "Database",
        },
        {
          imgUrl: "https://i.pinimg.com/originals/01/1d/b5/011db55ecc6a52a484a4f9be63158259.png",
          title: "PostgreeSQL",
          type: "Database",
        },
        {
          imgUrl: "https://allvectorlogo.com/img/2017/02/oracle-database-logo.png",
          title: "Oracle",
          type: "Database",
        },
        {
          imgUrl: "https://seeklogo.com/images/R/redis-logo-E403D4DD6A-seeklogo.com.png",
          title: "Redis",
          type: "Database",
        },
        /**Other */
        
        {
          imgUrl: "https://www.silicon.fr/wp-content/uploads/2020/12/Docker-Kubernetes-support.png",
          title: "Docker",
          type: "Other",
        },
        {
          imgUrl: "https://upload.wikimedia.org/wikipedia/labs/thumb/b/ba/Kubernetes-icon-color.svg/2110px-Kubernetes-icon-color.svg.png",
          title: "Kubernetes",
          type: "Other",
        },
        {
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png",
          title: "Git",
          type: "Other",
        },
        {
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png",
          title: "Linux",
          type: "Other",
        },
        
       
      ];
      const renderSkillsByType = (type) => {
        return (
          <Col >
            <div className='skill-bx'>
              <h2>{type}</h2>
              <div className='images-container'>
                {skills
                  .filter((skill) => skill.type === type)
                  .map((skill, index) => (
                    <img key={index} src={skill.imgUrl} title={skill.title} alt={skill.title} />
                  ))}
              </div>
            </div>
          </Col>
        );
      };
      
      
      return (
        <>
          <NavBar />
          <section className='skill' id='skills'>
            <Container>
              <Row>
                <Col xs={12} md={6} xl={5} className='image-col'>
                <img className='skill-gif' src='https://miro.medium.com/v2/resize:fit:1358/1*gReLR6hZjwyBxHmfLN1AVw.gif' alt='Developer'/>
                </Col>
                <Col>
                  <div className='skill-bx'>
                    <p>
                      I bring a diverse set of skills to the table, ranging from web development and design to software
                      engineering. With a keen eye for detail and a passion for problem-solving, I'm dedicated to creating
                      effective and user-friendly solutions
                    </p>
                  </div>
                </Col>
              </Row>
    
              <Row className='skill-section'>
                {renderSkillsByType('Frontend')}
                {renderSkillsByType('Backend')}
                {renderSkillsByType('Database')}
                {renderSkillsByType('Programming Language')}
                {renderSkillsByType('Other')}
              </Row>
            </Container>
          </section>
          <Contact />
          <Footer />
        </>
      );
      

} 

export default Skills