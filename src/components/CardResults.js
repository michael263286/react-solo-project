import React from 'react'
import {Container,Row, Col} from 'react-bootstrap'
import {playerData} from '../data.js'
import PlayerCard from './PlayerCard.js'


function CardResults() {
  return (
    <Container>
      <Row sm={1} md={2} lg={3} xl={4} className="g-4">
        {playerData.map(player => (
          <Col className="gap-5">
              <PlayerCard player={player} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CardResults 