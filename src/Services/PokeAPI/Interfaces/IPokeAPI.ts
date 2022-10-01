import IPokemon from "./IPokemon";

interface IPokeAPI {
  BASE_URL: string;
  getPokemon(number): IPokemon; // arrow function
  getManagerName(number): string;
}

export default IPokeAPI;
