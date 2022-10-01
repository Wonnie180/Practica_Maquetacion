import "./PokeCard.css";
import React, { useEffect, useState, useContext } from "react";
import { Tag } from "../Tag/Tag";
import {Stat} from "../Stat/Stat"

export const PokeCard = () => {
  return (
    <section className="card__container--main">
      <header className="card__header">
        <h2 className="card__header--name">Bulbasur</h2>
        <h3 className="card__header--id">#001</h3>
      </header>
      <img
        className="card__contenedor--image"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="Bulbasur"
      />
      <section className="card__container--secondary">
        <div className="card__tags">
          <Tag name="Grass" type="Grass" />
          <Tag name="Grass" type="Fire" />
        </div>
        <h2 className="card__about">About</h2>
        <div className="card__stats">
        <Stat name="Weight" type="Weight" value="6.9 kg"/> 
        <div class="vl"></div>
        <Stat name="Height" type="Height" value="0.7 m"/> 
        </div>
      </section>
    </section>
  );
};
