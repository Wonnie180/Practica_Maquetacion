import IPokemon from "../Interfaces/IPokemon";
import IType from "../Interfaces/IType";

export class Pokemon implements IPokemon {
    BASE_URL: string;
    id: number;
    name: string;
    height: number;
    weight: number;
    sprite_url: string; // sprites -> other -> official-artwork -> front_default
    types: IType[];
}

export default Pokemon;
