import React from 'react'

const ServiceCard = ({ img, title, description, size }) => {
    return (
        <div className={[size && `col-lg-${size}`, 'service-card-container'].join(' ')}>
            <img src={img} alt="" />
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard;