import "./Tag.css";
import React, { useEffect, useState, useContext } from "react";

export const Tag = ({ name, type }) => {
  return (
    <div className={"tag__container--common tag__container--" + type}>
      <tag className="tag__name">{name}</tag>
    </div>
  );
};
