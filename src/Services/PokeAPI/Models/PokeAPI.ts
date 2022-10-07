const BASE_URL = "https://pokeapi.co/api/v2/";
export const api = {
  getPokemonById: async (id) => {
    const response = await fetch(BASE_URL + "pokemon/" + id);
    return await response.json();
  },
  getPokemonsById: async (id) => {
    const response = await fetch(BASE_URL + "pokemon/" + id);
    return await response.json();
  },
  getPokemonDescriptionById: async (id) => {
    const response = await fetch(BASE_URL + "pokemon-species/" + id);
    return await response.json();
  },

  getPokemonDescriptionByName: async (name) => {
    const response = await fetch(BASE_URL + "pokemon-species/" + name);
    return await response.json();
  },
  getPokemonByName: async (name) => {
    const response = await fetch(BASE_URL + "pokemon/" + name);

    if (!response.ok) throw new Error("Pokemon not found");
    return await response.json();
  },
};

export default api;
