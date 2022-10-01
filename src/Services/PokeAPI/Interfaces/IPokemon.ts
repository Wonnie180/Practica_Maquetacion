import IType from "./IType";

interface IPokemon {
  BASE_URL: string;
  id: number;
  name: string;
  height: number;
  weight: number;
  sprite_url: string; // sprites -> other -> official-artwork -> front_default
  types: IType[];
}

export default IPokemon;
