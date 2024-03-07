import React from 'react'

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className={'service-card-container'}>
            <img src={icon} alt="" />
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard;