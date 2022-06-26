import './card-list.styles.css'
import './card-container.styles.css'
import MonsterCard from './MonsterCard'

import React from 'react'

const MonsterContainer = ({monsters}) => {

  return (
    <div className='card-list'>
    {monsters.map(monster => {
      return (
        <MonsterCard monster={monster} className="card-container" />
      )})}
  </div>
  )
}

export default MonsterContainer