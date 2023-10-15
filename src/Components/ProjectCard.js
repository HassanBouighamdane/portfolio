import { Col } from "react-bootstrap";
import '../styles/ProjectCard.css';
import navIcon3 from '../assets/img/nav-icon3.svg';
import  Laptop  from "../assets/img/laptop.svg";

export const ProjectCard=({title,description,imgUrl,githubLink,projectLink})=>{
    return(
        <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div className="description">{description}</div>

          <div className="social-icon">
          <a href={githubLink} target="_blank" title="GitHub"><img src={navIcon3} alt="Github" /></a>
          <a href={projectLink} title="Link"><img src={Laptop} alt="Laptop" /></a>
          </div>
          
        </div>
        
      </div>
    </Col>
    )
}