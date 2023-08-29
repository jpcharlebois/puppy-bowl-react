import React, { useEffect, useState } from 'react';
import { fetchSinglePlayer } from '../api/ajaxHelpers';
import { useParams } from 'react-router-dom';

export default function SinglePlayer() {
  const [player, setPlayer] = useState({});
  let { id } = useParams();

  function renderSinglePlayer() {
    console.log("player: ", player);
      return (
        <div key={player.id} className="players" >
          <h2>{player.name}</h2>
          <h4>{player.breed}</h4>
          <h4>{player.status}</h4>
          <img src={player.imageUrl} />
        </div>
      )
      }
  
  useEffect(() => {
    async function singlePlayersHandler() {
      const result = await fetchSinglePlayer(id);
      console.log("result: ", result);
      setPlayer(result);
    }
    singlePlayersHandler();
  }, [])
  
  return (
    <div>
      {renderSinglePlayer()}
    </div>
  )
}