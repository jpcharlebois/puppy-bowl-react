import { useState } from 'react'
import { addNewPlayer } from '../api/ajaxHelpers';

const NEW_PLAYER_URL = '';

export default function NewPlayerForm(){
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Hello 👋");

        const newPlayer = {
          name: name,
          breed: breed,
          status: status,
          imageUrl: imageUrl
        };

      await addNewPlayer(newPlayer);
      }

    return (
    <> 
      <div className='sign-up'>
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                    <input 
                        type='text' 
                        required={true} 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Breed: 
                    <input 
                        type='text' 
                        required={true} 
                        value={breed} 
                        onChange={(e) => setBreed(e.target.value)} />
            </label>
            <label>
                Status: 
                    <input 
                        type='text' 
                        required={true} 
                        value={status} 
                        onChange={(e) => setStatus(e.target.value)} />
            </label>
            <label>
                ImageUrl: 
                    <input 
                        type='text' 
                        value={imageUrl} 
                        onChange={(e) => setImageUrl(e.target.value)} />
            </label>
            <button>Submit</button>
        </form>
      </div>
    </>
    )
}