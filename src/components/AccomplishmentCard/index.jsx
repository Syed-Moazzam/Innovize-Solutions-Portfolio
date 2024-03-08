import React from 'react'

const AccomplishmentCard = ({ numberVal, title }) => {
    return (
        <div className='accomplishment-card-container'>
            <h1>{numberVal}</h1>
            <p>{title}</p>
        </div>
    )
}

export default AccomplishmentCard;