import React from 'react'

export default function about(props) {
    let i = 0;
    return (
        <section className="section about-section">
            <span className="about-background is-hidden-touch">HARSH</span>
            <section className="hero is-medium">
            <div className="hero-body">
                <div className="container">
                <div className="columns is-vcentered">
                    <div className="column">
                        <div>
                            <h1 className="title has-text-weight-bold is-size-1 name-title is-uppercase">harsh kumar</h1>
                            <h3 className="subtitle">
                                <a href="mailto:harshkmr991234@gmail.com" target="_blank" className="has-text-grey">harshkmr991234@gmail.com</a>
                            </h3>
                            <ul className="subtitle">
                                {
                                    props.about.split('\n').map(str => {
                                    return(<li key={i++}>{str}</li>
                                    )})
                                }
                            </ul>
                        </div>
                        <a target="_blank" href="http://bit.ly/imhrsh-r" className="button my-3 is-rounded is-large is-info">Resume 📝</a>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </section>
    )
}
