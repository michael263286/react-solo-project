import React from 'react';
import Table from 'react-bootstrap/Table';
import {playerData} from '../data.js'
import '../Accolades.css'



function Accolades(player) {

  return (
    <div style={{backgroundImage:`url("https://wallpaperaccess.com/full/5873624.jpg`}} className='backGround'>

    <Table size="md" responsive style={{fontColor:'White'}} striped bordered hover>
      <thead>
        <tr>
          <th style={{color:'White'}}>Player</th>
          <th style={{color:'White'}}>Accolades</th>
        </tr>
      </thead>
      <tbody>
      {playerData.map((player)=>(
        <tr>
          <td style={{color:'White'}}><img width="30px" height="25px" src="https://i.pinimg.com/736x/fd/9b/82/fd9b8243e22fa3c6184c5e8323efe0d3.jpg" alt="top 75 icon"/>  {player.Name}</td>
          <td style={{color:'White'}}>{player.Accolades}</td>
        </tr>
          ))}
      </tbody>
    </Table>
    </div>
  );
}

export default Accolades;