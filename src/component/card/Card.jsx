import React from 'react'

const Card = ({ image, name, genres, cast, language, date, duration, screen, rating }) => {
    return (
        <>
            <div class="card border-0">
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{genres}</p>                    
                </div>
            </div>
        </>
    )
}

export default Card