import React from 'react';

const ChooseUsCard = ({ icon, title, description }) => {
    return (
        <div className={'choose-us-card-container'}>
            <div><img src={icon} alt="" /></div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default ChooseUsCard;