import React from 'react'

export default function navbar() {
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Harsh Kumar</a>
                <div className="flex">
                    <div className="row" style={{color:"white"}}>
                        <div className="col">About</div>
                        <div className="col">Projects</div>
                        <div className="col">Experience</div>
                        <div className="col">Contact</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
