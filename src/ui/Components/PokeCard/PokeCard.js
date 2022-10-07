import "./PokeCard.css";
import React from "react";
import { Tag } from "../Tag/Tag";
import { Stat } from "../Stat/Stat";

const pad = (num, size) => {
  if (num === undefined || size === 0) return num;
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
};

export const PokeCard = ({ pokemon }) => {
  return (
    <section
      className="card__container--main"
      style={{ backgroundColor: `var(--pokemon__type--${pokemon.types?.[0]}` }}
    >
      <header className="card__header">
        <h2 className="card__header--name">{pokemon.name}</h2>
        <h3 className="card__header--id">#{pad(pokemon.id, 3)}</h3>
      </header>
      <img
        className="card__contenedor--image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt="Bulbasur"
      />
      <section className="card__container--secondary">
        <div className="card__tags">
          {pokemon.types?.map((type) => {
            return <Tag key={type} type={type} />;
          })}
        </div>
        <h2
          className="card__about"
          style={{ color: `var(--pokemon__type--${pokemon.types?.[0]}` }}
        >
          About
        </h2>
        <div className="card__stats">
          {pokemon.stats.map(([name, value, unit], index) => {
            if (unit !== undefined)
              return (
                <div className="card__stat--container">
                  <Stat key={index} type={name} value={`${value} ${unit}`} />
                </div>
              );
            else
              return (
                <div className="card__stat--container">
                  <Stat key={index} type={name} value={`${value}`} />
                </div>
              );
          })}
        </div>
        <div tabindex="-1" className="card__description ellipsis ellipsis--3">
          <span>{pokemon.description}</span>
        </div>
      </section>
    </section>
  );
};
