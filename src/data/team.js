const teamMembers = [
    {
        id: 1,
        name: "Amoo Quadri Ayomikun",
        role: "CEO & Founder",
        bio: "Visionary engineer and full-stack developer leading product strategy, technical architecture, and system growth."
    },
    {
        id: 2,
        name: "James Doe",
        role: "Senior Frontend Engineer",
        bio: "Specializes in building responsive UI layouts, fluid user experiences, and highly optimized React applications."
    },
    {
        id: 3,
        name: "Ada Okafor",
        role: "Lead Product Designer",
        bio: "Crafts beautiful design systems, intuitive user workflows, and high-fidelity wireframes that prioritize accessibility."
    },
    {
        id: 4,
        name: "Kofi Mensah",
        role: "Backend Architecture Lead",
        bio: "Expert in distributed cloud databases, secure REST/GraphQL APIs, and server infrastructure performance optimization."
    },
    {
        id: 5,
        name: "Zara Nwosu",
        role: "DevOps & Cloud Specialist",
        bio: "Manages CI/CD pipelines, automated cloud server deployments, microservices containerization, and site reliability."
    },
    {
        id: 6,
        name: "Tunde Musa",
        role: "Technical Product Manager",
        bio: "Bridges the gap between technical execution and business goals, translating product vision into actionable development cycles."
    }
]

const teamMembersInitials = teamMembers.map((teamMember) => {
    const initials = teamMember.name
                    .split(" ")
                    .map((name) => {
                        return name[0]
                    })
                    .join("")
                    .toUpperCase()

    return {
        ...teamMember,
        initials: initials
    }
})

export default teamMembersInitials