import "./Home.css";
import React, { useEffect, useState, useContext } from "react";
import { PokeCard } from "../Components/PokeCard/PokeCard";
import { api as PokeAPI } from "../../Services/PokeAPI/Models/PokeAPI.ts";

const ParsePokemonJson = (pokemonJson) => {
  const pokemonParsed = {
    name: pokemonJson.name,
    id: pokemonJson.id,
    types: [],
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    weight: pokemonJson.weight / 10,
    height: pokemonJson.height / 10,
  };
  pokemonJson.types?.forEach((type) =>
    pokemonParsed.types.push(type?.type?.name)
  );

  return pokemonParsed;
};

export const Home = () => {
  const [pokemon, setPokemon] = useState(undefined);
  const [pokemons, setPokemons] = useState(undefined);

  let id = 100;
  const ids = [];
  const limite = 60;
  const max = 151;
  // TODO id 21 -> Description
  for (let i = 1; i <= limite; i++) ids.push(Math.floor(Math.random() * max));

  useEffect(() => {
    const fetchPokemon = async (id) => {
      const pokemonJson = await PokeAPI.getPokemon(id);
      const pokemonDescriptionJson = await PokeAPI.getPokemonDescription(id);

      const pokemonParsed = {
        name: pokemonJson.name,
        id: pokemonJson.id,
        types: [],
        description:
          "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        weight: pokemonJson.weight / 10,
        height: pokemonJson.height / 10,
      };
      pokemonJson.types?.forEach((type) =>
        pokemonParsed.types.push(type?.type?.name)
      );

      pokemonParsed.description =
        pokemonDescriptionJson.flavor_text_entries?.[9].flavor_text;

      setPokemon(pokemonParsed);
    };

    fetchPokemon(id);
  }, []);

  useEffect(() => {
    const fetchPokemon = async (pokemonsToFetch) => {
      const pokemonPromises = pokemonsToFetch.map((id) => {
        return PokeAPI.getPokemon(id);
      });

      const pokemonDescriptionsPromises = pokemonsToFetch.map((id) => {
        return PokeAPI.getPokemonDescription(id);
      });

      const pokemonsFetched = (await Promise.all(pokemonPromises)).map(
        (pokemon) => ParsePokemonJson(pokemon)
      );

      (await Promise.all(pokemonDescriptionsPromises)).forEach(
        (pokemonDescription, index) =>
          (pokemonsFetched[index].description =
            pokemonDescription.flavor_text_entries?.[9].flavor_text)
      );

      setPokemons(pokemonsFetched);
    };
    fetchPokemon(ids);
  }, []);

  if (pokemons === undefined) return null;

  return (
    <main className="cards__container--main">
      {pokemons.map((pokemon) => {
        return <PokeCard key={pokemon.id} pokemon={pokemon}></PokeCard>;
      })}
    </main>
  );
};
