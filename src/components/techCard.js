import React from "react";

function getRamdomColor(){
  var colors = ["is-primary","is-link","is-info","is-success","is-danger"];

  return "progress " + colors[Math.floor(Math.random() * colors.length)];
}

export default function techCard(props) {
  return (
    <div className="container">
      <h2 className="has-text-weight-bold">{props.skill.name}</h2>
      <progress className={getRamdomColor()} value={props.skill.score} max="100"></progress>
    </div>
  );
}
