import React from 'react'
import BetCardItem from "./BetCardItem"

const BetCards = ({games, isLoading}) => {
    console.log(games)
    // if website is loading show an H1 with "Loading"
  return isLoading ? <h1>Loading</h1> : <section className='games'>
    {games.map((game) => (
        <BetCardItem key={game.id} game={game}></BetCardItem>
    ))}
  </section>
}

export default BetCards