import React from "react";
import {MDBContainer} from "mdb-react-ui-kit";
import NavBar from '../Components/NavBar'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import '../styles/Education.css'
import CardImage from "../Components/CardImage";
import lycee from "../assets/img/lycee.png"

export default function Education(){

    const cursus=[
        {
            src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Logo_inpt.PNG/640px-Logo_inpt.PNG",
            alt:"INPT image",
            title:"INPT-Rabat",
            time:"2022-present",
            description:"Software Engineering student at INPT, field Advanced Software Engineering for Digital Services (ASEDS).",
            position:1

        },
        {
            src:"https://lyc-camilleguerin.fr/wp-content/uploads/2021/11/CPGE.png",
            alt:"CPGE image",
            title:"CPGE Centre Guelmim Bab Sahra",
            time:"2020-2022",
            description:"Field Physics and Engineering Sciences (PSI).National Rang 95/911.",
            position:2
            
        },
        {
            src: lycee,
            alt:"High School image",
            title:"Al Irfane High School Taghjijt-Guelmim",
            time:"2020",
            description:" Baccalaureate Scientifique",
            position:3
            
        }
    ]

    return(
        <>
        <NavBar/>
        <MDBContainer fluid className="py-5" >
      <div className="main-timeline-2">
        {cursus.map((cursus,index)=>{
            return(
                <CardImage
                key={index}
                {...cursus}
                />
            )
        })
    }
        </div>
    </MDBContainer>

        <Contact/>
        <Footer/>
        </>
    )
}