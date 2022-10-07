import "./Stat.css";
import React from "react";
import HeightIcon from "../../Assets/Icons/HeightIcon.svg";
import WeightIcon from "../../Assets/Icons/WeightIcon.svg";

const renderStatIcon = (icon) => {
  const dictionaryIcons = {
    height: HeightIcon,
    weight: WeightIcon,
  };

  if (dictionaryIcons[icon]) {
    return (
      <img src={dictionaryIcons[icon]} alt={icon} className="stat__icon" />
    );
  }
  return "";
};
export const Stat = ({ type, value }) => {
  return (
    <div className={"stat__container--common stat__container--" + type}>
      <div className="stat__container--row">
        {renderStatIcon(type)}
        <p className="stat__value">{value}</p>
      </div>
      <p className="stat__name">{type}</p>
    </div>
  );
};
