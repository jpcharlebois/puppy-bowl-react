import React, { useState, useEffect } from 'react'
import { fetchAllPlayers } from '../api/ajaxHelpers'
import { useNavigate } from 'react-router-dom'


export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  function renderAllPlayers() {
    console.log("players: ", players);
    return players.map((player) => {
      return (
        <div key={player.id} className="players" >
          <h2>{player.name}</h2>
          <h4>{player.breed}</h4>
          <h4>{player.status}</h4>
          <div className="img-bttn-div">
            <img src={player.imageUrl} />
            <button onClick = {() => navigate(`/players/${player.id}`)} >See Details</button>
          </div>
        </div>
      )
    })

  }
  
  useEffect(() => {
    async function allPlayersHandler() {
      const result = await fetchAllPlayers();
      console.log("results: ", result);
      setPlayers(result);
    }
    allPlayersHandler();
  }, [])
  
  return (
    <div>
      {renderAllPlayers()}
    </div>
  )
}