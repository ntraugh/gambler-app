import React from 'react'
import {Button, Col, Row} from 'react-bootstrap'

const BetCardItem = ({game}) => {
    // somehow filter by best odds

  return (
    <Row>
        <Col>
            <p>{game.home_team}</p>
            VS.
            <p>{game.away_team}</p>
            <Button variant="primary" a href={`https://www.google.com/search?q=${game.bookmakers[0].title} +${game.home_team}`}>{game.bookmakers[0].title}</Button>
            <Button a href={`https://www.google.com/search?q=${game.bookmakers[1].title} +${game.home_team}`}>{game.bookmakers[1].title}</Button>
            <Button a href={`https://www.google.com/search?q=${game.bookmakers[2].title} +${game.home_team}`}>{game.bookmakers[2].title}</Button>
        </Col>
    </Row>
  )
}

export default BetCardItem