import React from 'react';
import Facebook from '../images/icons/facebook.svg';
import Instagram from '../images/icons/instagram.svg';
import LinkedIn from '../images/icons/linkedin.svg';
import Twitter from '../images/icons/twitter.svg';
import Github from '../images/icons/github.svg';

export default function contact(props) {
    return (
        <footer className="footer has-background-dark">
            <div className="container has-text-centered">
                <h1 className="title has-text-centered has-text-white">Let's connect 🔗</h1>
                <div style={{display: "inline-flex", flexWrap: "wrap",  alignItems:"center", justifyContent: "center", alignContent:"center"}}>
                    
                    <span className="px-2 py-2">
                        <figure className="image is-64x64">
                        <a target="_blank" href="https://www.linkedin.com/in/imhkmr/">
                            <img className="is-rounded" src={LinkedIn} alt="" />
                        </a>
                        </figure>
                    </span>

                    <span className="px-2 py-2">
                        <figure className="image is-64x64">
                        <a target="_blank" href="https://github.com/hkmr/">
                            <img style={{backgroundColor:"white"}} className="is-rounded" src={Github} alt="" />
                        </a>
                        </figure>
                    </span>

                    <span className="px-2 py-2">
                        <figure className="image is-64x64">
                        <a target="_blank" href="https://www.facebook.com/imhkmr/">
                            <img className="is-rounded" src={Facebook} alt="" />
                        </a>
                        </figure>
                    </span>

                    <span className="px-2 py-2">
                        <figure className="image is-64x64">
                        <a target="_blank" href="https://www.instagram.com/imhkmr/">
                            <img className="is-rounded" src={Instagram} alt="" />
                        </a>
                        </figure>
                    </span>

                    <span className="px-2 py-2">
                        <figure className="image is-64x64">
                        <a target="_blank" href="https://twitter.com/imhkmr">
                            <img className="is-rounded" src={Twitter} alt="" />
                        </a>
                        </figure>
                    </span>
                </div>
                <h4>Designed by <a href="https://www.linkedin.com/in/imhkmr/" style={{textDecoration:"none",color:"black"}}>Harsh Kumar</a></h4>
            </div>
        </footer>
    );
}
