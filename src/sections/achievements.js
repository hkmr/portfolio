import React from 'react'
import AchievementCard from '../components/achievementCard';

export default function achievements(props) {
    return (
        <section className="section">
            
            <div className="container">
                <h1 className="title">Certificates 🧧</h1>
                <div className="columns is-multiline is-mobile">
                    {
                        props.achievements.map(achievement => {
                            return (
                                <div key={achievement.id} className="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen">
                                    <AchievementCard 
                                        name={achievement.name}
                                        link={achievement.link}
                                        img={achievement.image}
                                        platform={achievement.platform}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>

        </section>
    )
}
