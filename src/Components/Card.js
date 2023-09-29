import React from 'react'

const Card = ({monsters}) => {
  return (
    <div>
         <div className='cardContainer '>
        {monsters.map((monster) => {
          return (<div className='monsterCards' key={monster.id}>
            <img src={`https://robohash.org/${monster.id}?set=set2`} alt='monsters image' />
            <p> {monster.name} </p>
            <p>{monster.email}</p>
          </div>)
        })}             </div>
    </div>
  )
}

export default Card
