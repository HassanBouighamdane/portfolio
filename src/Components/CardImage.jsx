import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
  } from "mdb-react-ui-kit";
  export default function CardImage({src,alt,title,time,description,position}){
    return(
        <div className={position%2==0 ? "timeline-2 left-2" : "timeline-2 right-2"}>
        <MDBCard>
          <MDBCardImage
            src={src}
            alt={alt}
            position="top"
          />
          <MDBCardBody className="p-4">
            <h4 className="fw-bold mb-4">{title}</h4>
            <p className="text-muted mb-4">
              <MDBIcon far icon="clock" /> {time}
            </p>
            <p className="mb-0">
              {description}
            </p>
          </MDBCardBody>
        </MDBCard>
      </div>
    )

  }
