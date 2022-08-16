import React from 'react'
import {Button, Container, Stack} from 'react-bootstrap'

const BetCardItem = ({game}) => {
    // somehow filter by best odds

  return (
            <div className='col-lg-4 p-3 border rounded-2 shadow-lg mt-5 mx-2'>
                <p><b>RUN LINE ALWAYS 1.5. If no - next to number it is a + bet. Prices based on spreads.</b></p>
                <p>{game.home_team}{" "} <span>{game.bookmakers[0].markets[0].outcomes[0].price}</span></p>
                VS.
                <br />
                <br />
                <p>{game.away_team}{" "} <span>{game.bookmakers[0].markets[0].outcomes[1].price}</span></p>
                <div className='d-flex'>
                    <Button a href={`https://www.google.com/search?q=${game.bookmakers[0].title}`}>{game.bookmakers[0].title}</Button>
                    {/* <Button a href={`https://www.google.com/search?q=${game.bookmakers[1]}`}>{game.bookmakers[1].title}</Button>
                    <Button a href={`https://www.google.com/search?q=${game.bookmakers[2]}`}>{game.bookmakers[2].title}</Button> */}
                </div>
            </div>
  )
}

export default BetCardItem