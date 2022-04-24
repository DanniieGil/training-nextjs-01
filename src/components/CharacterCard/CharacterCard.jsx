import Image from "next/image";
import React from "react";
import {
  nameCharacter,
  imgCharacter,
  container,
} from "./CharacterCard.module.css";

export const CharacterCard = ({ id, name, image, status, species }) => {
  return (
    <div className={container}>
      <h2 className={nameCharacter}>{name}</h2>
      <img className={imgCharacter} src={image} alt={name} />
    </div>
  );
};
