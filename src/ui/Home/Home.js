import "./Home.css";
import React, { useEffect, useState } from "react";
import { PokeCard } from "../Components/PokeCard/PokeCard";
import { SearchBar } from "../Components/SearchBar/SearchBar";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
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
  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearchText] = useState("");

  const inPokemons = () => {
    if (pokemons.length < 1) return false;
    return pokemons.some((poke) => {
      return poke.id === pokemon.id;
    });
  };

  useEffect(() => {
    if (Object.keys(pokemon).length > 0 && !inPokemons())
      setPokemons((pokemons) => [...pokemons, pokemon]);
  }, [pokemon]);

  useEffect(() => {
    console.log({ pokemons });
  }, [pokemons]);

  const handleSearch = async () => {
    if (searchText.length < 1) return;
    try {
      const pokemonJson = await PokeAPI.getPokemonByName(
        searchText.toLowerCase()
      );

      const pokemonDescriptionJson = await PokeAPI.getPokemonDescriptionByName(
        searchText.toLowerCase()
      );

      const pokemonParsed = ParsePokemonJson(pokemonJson);

      pokemonParsed.description =
        pokemonDescriptionJson.flavor_text_entries?.[9].flavor_text;

      setPokemon(pokemonParsed);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <section className="header--main">
        <Header></Header>
      </section>
      <section className="search_container--main">
        <SearchBar
          onSearch={handleSearch}
          searchText={searchText}
          onTextChange={setSearchText}
          searchPlaceholder="Busca por nombre al Pokemon!!"
        ></SearchBar>
      </section>
      <section className="cards__container--main">
        {pokemons.map((pokemon) => {
          if (Object.keys(pokemon).length > 0) {
            return <PokeCard key={pokemon.id} pokemon={pokemon}></PokeCard>;
          }
        })}
      </section>
      <section className="footer--main">
        <Footer></Footer>
      </section>
    </main>
  );
};
