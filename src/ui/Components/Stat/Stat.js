import "./Stat.css";
import React, { useEffect, useState, useContext } from "react";

export const Stat = ({ name, type, value }) => {
  return (
    <div className={"stat__container--common stat__container--" + type}>
      <div className="stat__container--row">
        <img className="stat__icon"></img>
        <p className="stat__value">{value}</p>
      </div>
      <p className="stat__name">{name}</p>
    </div>
  );
};
