const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Director of Product",
        company: "InnovateTech",
        quote: "This platform completely transformed how our engineering team coordinates. The custom workflows cut our cycle times down by nearly forty percent."
    },
    {
        id: 2,
        name: "Marcus Chen",
        role: "Engineering Manager",
        company: "DevStream",
        quote: "The visual task management layout is incredibly clean. Switching from cluttered spreadsheets to these intuitive boards saved us hours of administrative headaches."
    },
    {
        id: 3,
        name: "Elena Rostova",
        role: "Operations Lead",
        company: "Stellar Scale",
        quote: "Having built-in metrics and time tracking integrated right inside our workspaces means I no longer have to cross-reference multiple third-party analytics apps."
    },
    {
        id: 4,
        name: "David Kalu",
        role: "Founder",
        company: "Apex Digital Solutions",
        quote: "The responsive layout handles split-screen multitasking effortlessly. Our team shifts from desktop monitors to mobile viewports without losing a single beat of tracking."
    },
    {
        id: 5,
        name: "Chloe Harrison",
        role: "Creative Director",
        company: "Prism Studios",
        quote: "Shared team spaces have made real-time documentation and remote asset collaboration completely seamless. It is the central truth hub for our studio."
    },
    {
        id: 6,
        name: "Amara Okafor",
        role: "Senior Solutions Architect",
        company: "Vanguard Tech",
        quote: "What impressed me most was the performance stability. Even with hundreds of active tasks and filters running concurrently, the pagination loading is instant."
    }
];

const testimonialsWithInitials = testimonials.map((testimonial) => {
    const initials = testimonial.name
                    .split(" ")
                    .map((name) => {
                        return name[0]
                    })
                    .join("")
                    .toUpperCase()

    return{
        ...testimonial,
        initials: initials
    }
})

export default testimonialsWithInitials;