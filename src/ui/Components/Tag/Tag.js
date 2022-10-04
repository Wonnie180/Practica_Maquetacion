import "./Tag.css";
import React, { useEffect, useState, useContext } from "react";

export const Tag = ({ type }) => {
  return (
    <div className={"tag__container--common"} style={{ backgroundColor: `var(--pokemon__type--${type}` }}>
      <article className="tag__name">{type}</article>
    </div>
  );
};
