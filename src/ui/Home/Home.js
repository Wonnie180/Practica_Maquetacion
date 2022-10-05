import "./Home.css";
import React, { useEffect, useState, useContext } from "react";
import { PokeCard } from "../Components/PokeCard/PokeCard";
import { api as PokeAPI } from "../../Services/PokeAPI/Models/PokeAPI.ts";

const ParsePokemonJson = (pokemonJson) => {
  const pokemonParsed = {
    name: pokemonJson.name,
    id: pokemonJson.id,
    types: [],
    description: "Placeholder",
    stats: [
      ["weight", pokemonJson.weight / 10, "kg"],
      ["height", pokemonJson.height / 10, "m"],
      ["moves", pokemonJson.abilities?.[0].ability.name],
    ],
  };
  pokemonJson.types?.forEach((type) =>
    pokemonParsed.types.push(type?.type?.name)
  );

  return pokemonParsed;
};

export const Home = () => {
  // const [pokemon, setPokemon] = useState(undefined);
  const [pokemons, setPokemons] = useState(undefined);

  let id = 100;
  const ids = [];
  const limite = 6;
  const max = 150;
  ids.push(21);
  // TODO id 21 -> Description
  for (let i = 1; i <= limite; i++)
    ids.push(Math.floor(Math.random() * max) + 1);

  // useEffect(() => {
  //   const fetchPokemon = async (id) => {
  //     const pokemonJson = await PokeAPI.getPokemon(id);
  //     const pokemonDescriptionJson = await PokeAPI.getPokemonDescription(id);

  //     const pokemonParsed = {
  //       name: pokemonJson.name,
  //       id: pokemonJson.id,
  //       types: [],
  //       description: "Placeholder",
  //       stats: {
  //         weight: pokemonJson.weight / 10,
  //         height: pokemonJson.height / 10,
  //         ability: [],
  //       },
  //     };
  //     pokemonJson.types?.forEach((type) =>
  //       pokemonParsed.types.push(type?.type?.name)
  //     );

  //     pokemonParsed.description =
  //       pokemonDescriptionJson.flavor_text_entries?.[9].flavor_text;

  //     setPokemon(pokemonParsed);
  //   };

  //   fetchPokemon(id);
  // }, []);

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
