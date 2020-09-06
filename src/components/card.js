import React from "react";

export default function CharacterCard(props) {
  const { img, name, origin } = props;
  return (
    <div className="card">
      <img className="photo" src={img} alt={name} />
      <h2>{name}</h2>
      <p>
        <b>Origin:</b> {origin}
      </p>
    </div>
  );
}
