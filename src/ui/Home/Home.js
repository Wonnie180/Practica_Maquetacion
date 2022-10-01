import "./Home.css";
import React, { useEffect, useState, useContext } from "react";
import { PokeCard } from "../Components/PokeCard/PokeCard";

export const Home = () => {
  return <main>
    <PokeCard></PokeCard>
  </main>;
};
