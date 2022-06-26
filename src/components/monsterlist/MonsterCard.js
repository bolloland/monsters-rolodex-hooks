import './card-container.styles.css'

import React from 'react'

const MonsterCard = ({monster}) => {
    console.log({monster})
    const { id, name, email } = monster
    return (
        <div className="card-container" key={id}>
        <img alt={`Monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>

    )
}

export default MonsterCard
