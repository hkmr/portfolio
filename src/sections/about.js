import React from 'react'

export default function about(props) {
    return (
        <section className="hero is-medium is-dark is-bold">
            <div className="hero-body">
                <div className="level">
                    <div className="level-left">
                        <div>
                            <h1 className="has-text-weight-bold is-size-1">Harsh Kumar</h1>
                            <ul className="subtitle">
                                {
                                    props.about.split('\n').map(str => {
                                    return(<li>{str}</li>
                                    )})
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="level-right pt-3">
                        <a target="_blank" href="https://drive.google.com/file/d/1o_zTvzfiThyxiSiWQoZCRMyK3rGZFbbw/view?usp=sharing" className="button is-rounded is-info">📃 Resume</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
