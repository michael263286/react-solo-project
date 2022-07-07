import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import PlayerCard from "../components/PlayerCard";



function Starters(){
  const players = useSelector(state => state.players)
  console.log(players)


  return(
    <Container>
        <Row sm={1} md={2} lg={3} xl={4} className="g-4">
        {players.map(player => (
          <Col key={player.name} className="gap-4">
              <PlayerCard player={player} hideButton />
          </Col>
        ))}
        </Row>
    </Container>
  )

}

export default Starters