import React from "react";
import {MDBContainer} from "mdb-react-ui-kit";
import NavBar from '../Components/NavBar'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import '../styles/Education.css'
import CardImage from "../Components/CardImage";

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
            src:"https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/304808771_458349446309677_1302271115427643685_n.png?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHgW5IWJx9cCnUzS3ooK3yXVYQoRIhaEV1VhChEiFoRXdBUPHLLYAbOmXtbZg3XUNYl9snlNlr-8iJikRvnh1ti&_nc_ohc=WlYERPeuWS0AX-foExJ&_nc_ht=scontent-mad2-1.xx&oh=00_AfDhJQ8dCGeWUIIlmmW92OVN1txQUb7oSkBb8cMWo1XOzg&oe=657C4A16",
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