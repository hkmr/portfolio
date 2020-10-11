import React from "react";

export default function projectCard(props) {
  return (
    <div className="card">
      <div className="card-image">
        <a target="_blank" href={props.link}>
          <figure className="image is-4by3">
            <img src={props.image} alt="Placeholder image"/>
          </figure>
        </a>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <a target="_blank" href={props.link}><p className="title is-4">{props.name}</p></a>
            <p className="subtitle is-6">{props.location}</p>
          </div>
        </div>

        <div className="tags">
          {props.description}<br/>
          {
            props.hashtags.map(hashtag =>{
            return <span className="tag is-link is-light">{hashtag}</span>
            })
          }
          <br/>
        </div>

      </div>
    </div>
  );
}
