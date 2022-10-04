import "./Stat.css";
import React, { useEffect, useState, useContext } from "react";
import HeightIcon from "../../Assets/Icons/HeightIcon.svg";
import WeightIcon from "../../Assets/Icons/WeightIcon.svg";

export const Stat = ({ type, value }) => {
  let icon = "undefined";
  if (type === "height") {
    icon = HeightIcon;
  } else if (type === "weight") {
    icon = WeightIcon;
  }
  return (
    <div className={"stat__container--common stat__container--" + type}>
      <div className="stat__container--row">
        <img src={icon} alt={icon} className="stat__icon" />
        <p className="stat__value">{value}</p>
      </div>
      <p className="stat__name">{type}</p>
    </div>
  );
};
