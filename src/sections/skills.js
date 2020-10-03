import React from 'react'
import TechCard from '../components/techCard.js';

export default function skills(props) {
   var i=0;
    return (
      <section className="section">
         <div className="container">
         <h1 className="title">Skills Got 👨🏼‍🔧</h1>
            <div className="columns is-centered is-multiline is-mobile">
               {
                  props.skills.map(skill => {
                     return (
                        <div key={i++} className="column is-5-mobile is-4-tablet is-3-desktop"> 
                           <TechCard skill={skill} /> 
                        </div>
                     );
                  })
               }
            </div>
         </div>
      </section>
    )
}
