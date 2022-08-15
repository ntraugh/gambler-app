import React from 'react'
import {Button} from 'react-bootstrap'

const BetCardItem = ({game}) => {
  return (
    <div>
        <p>{game.home_team}</p>
        VS.
        <p>{game.away_team}</p>
        <Button a href={`https://www.google.com/search?q=${game.bookmakers[5].title} +${game.home_team}`}>{game.bookmakers[5].title}</Button>
    </div>
  )
}

export default BetCardItem