import "./serviceCard.css";

import React from 'react'

const ServiceCard = ({image, name, info}) => {
  return (
    <div className="service-card" >
      <div className="service-card-info" >
        <div className="service-icon" >
          <img className="service-image"  src={image} alt="icon" />
          </div>
          <h3>{name}</h3>
          <p>{info}</p>
      </div>
      <div className="service-card-image rotate-in-center" ></div>
    </div>
  )
}

export default ServiceCard;