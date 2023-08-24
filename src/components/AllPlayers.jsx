import React, { useState, useEffect } from 'react'
import { fetchAllPlayers } from '../api/ajaxHelpers'

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  
  function renderAllPlayers() {
    console.log("players: ", players);
    players.map((player) => {
      return (
        <div className="players" >
          <h2>{player.name}</h2>
          <h4>{player.breed}</h4>
          <h4>{player.status}</h4>
          <img src={player.imageUrl} />
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

  renderAllPlayers();
}