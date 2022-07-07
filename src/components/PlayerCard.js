import React  from 'react'
import {Card,ListGroup,ListGroupItem,Button,} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {addStarter} from '../redux/starters/actions'



function PlayerCard({player,hideButton}) {
  const dispatch = useDispatch()
  const players = useSelector(state => state.players)
  const disabled = players.some(currentPlayer => currentPlayer.Name === player.Name)

  const handleAdd = (player) => {
    dispatch(addStarter(player))
  }
return(
  <Card style={{ width: '18rem',color:'white' }}>
    <Card.Img variant="top" src={player.Image }/>
    <Card.Body style={{ backgroundColor: 'black' }}>
      <Card.Title>{player.Name}
      <br></br>
      <br></br>
      {hideButton || (
        <Button style={{fontSize:'12px' }} variant="light" disabled={disabled} onClick={()=> {handleAdd(player)}} size="sm">Make starter</Button>
      )}
      </Card.Title>
    </Card.Body>
    <ListGroup style={{ backgroundColor: 'black',color:'white' }} className="list-group-flush">
      <ListGroupItem style={{ backgroundColor: 'black',color:'white' }}>{player.Position}</ListGroupItem>
      <ListGroupItem style={{ backgroundColor: 'black',color:'white' }}>{player.Team}</ListGroupItem>
      <ListGroupItem style={{ backgroundColor: 'black',color:'white' }}>{player.Number}</ListGroupItem>
    </ListGroup>
  </Card>
  )
}

export default PlayerCard