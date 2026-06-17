import React from 'react'
import teamMembersInitials from '../data/team'

const AboutPage = () => {
    const companyValues = [
        {
            id: 1,
            icon: "fa-solid fa-lightbulb",
            title: "Continuous Innovation",
            description: "We are constantly refining our operational frameworks to keep digital workspaces lightning-fast, smooth, and robust."
        },
        {
            id: 2,
            icon: "fa-solid fa-handshake",
            title: "Radical Transparency",
            description: "Open communication builds high-velocity execution. We cultivate trust by keeping task status fully contextualized."
        },
        {
            id: 3,
            icon: "fa-solid fa-user-shield",
            title: "User-First Alignment",
            description: "Every deployment pattern, glassmorphism card, and interface button is meticulously tuned for day-to-day software performance."
        }
    ]

  return (
    <div className='about-page'>
        <section className="mission-section">
            <h1 className="about-heading">Our Mission</h1>
            <div className="mission-content">
                <p>
                    Founded with the explicit goal of eliminating communication gaps across technical organizations, 
                    FlowSpace bridges the divide between system planning and live execution. We believe that modern engineering 
                    teams shouldn't have to suffer through scattered software trackers or disconnected document hubs just to build products.
                </p>
                <p>
                    By integrating interactive task management layout structures, real-time analytics indicators, and built-in timeline logs 
                    into a singular responsive client hub, we enable cross-functional organizations worldwide to save hours of manual maintenance.
                </p>
            </div>
            <blockquote className="mission-statement">
                "To provide teams with the ultimate, friction-free environment where technical strategy and visual execution exist in perfect, uninterrupted flow."
            </blockquote>
        </section>

        <section className="values-section">
            <h2 className="section-title">The Values That Drive Us</h2>
        
            <div className="values-grid">
                {companyValues.map((value) => (
                    <div className="value-card" key={value.id}>
                        <div className="value-icon-box">
                            <i className={value.icon}></i>
                        </div>
                        <h3 className="value-title">{value.title}</h3>
                        <p className="value-description">{value.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="team-section">
            <h2 className="section-title">Meet the Minds Behind FlowSpace</h2>
            <div className="team-grid">
                {teamMembersInitials.map((team) => {
                    return (
                        <div className="team-card" key={team.id}>
                            <div className='team-avatar'>{team.initials}</div>
                            <p className="team-name">{team.name}</p>
                            <p className='team-role'>{team.role}</p>
                            <p className="team-bio">{team.bio}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    </div>
  )
}

export default AboutPage