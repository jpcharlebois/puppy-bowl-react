const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2305-ftb-pt-web-pt-jp"

export async function fetchAllPlayers() {
    try {
        const fetchAllPlayersUrl = `${BASE_URL}/players`;
        const response = await fetch(fetchAllPlayersUrl);
        const result = await response.json();
        console.log("fetch ", result);
        return result.data.players;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function fetchSinglePlayer(playerId) {
    try {
        const fetchSinglePlayerUrl = `${BASE_URL}/players/${playerId}`;
        const response = await fetch(fetchSinglePlayerUrl);
        const result = await response.json();
        console.log("fetch ", result);
        return result.data.players;
    } catch (error) {
        console.log(error);
        return error;
    }
}