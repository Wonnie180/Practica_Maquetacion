// import IPokeAPI from "../Interfaces/IPokeAPI";

// export class PokeAPI implements IPokeAPI {
//     BASE_URL: string = "https://pokeapi.co/api/v2/";
//     getPokemon(number): IPokemon;
//     getManagerName(number): string;
//   }

// export default PokeAPI;

// https://pokeapi.co/api/v2/pokemon/{id}

const BASE_URL = "https://pokeapi.co/api/v2/";
// `https://pokeapi.co/api/v2/${id}`
export const api = {
  getPokemon: async (id) => {
    const response = await fetch(BASE_URL + "pokemon/" + id);
    return await response.json();
  },
  getPokemons: async (id) => {
    const response = await fetch(BASE_URL + "pokemon/" + id);
    return await response.json();
  },
  getPokemonDescription: async (id) => {
    const response = await fetch(BASE_URL + "pokemon-species/" + id);
    return await response.json();
  },
};

export default api;
