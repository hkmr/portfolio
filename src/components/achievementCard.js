import React from 'react'

export default function achievementCard(props) {
    return (
        <div className="card card-equal-height">
            <div className="card-image">
                <a target="_blank" href={props.link}>
                    <figure className="image is-4by3">
                        <img src={props.img} alt="Placeholder image"/>
                    </figure>
                </a>
                <div className="card-content">
                    <p className="title is-4">{props.name}</p>
                    <p className="subtitle is-6 has-text-weight-bold has-text-info-dark">@{props.platform}</p>
                </div>
            </div>
        </div>
    )
}
