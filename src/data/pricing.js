const pricingTiers = [
    {
        id: 1,
        name: "Free",
        description: "Essential tools for individuals and freelancers getting started with visual task tracking.",
        monthlyPrice: 0,
        annualPrice: 0,
        featured: false,
        features: [
            { text: "Up to 3 Kanban boards", included: true },
            { text: "Basic time tracking tools", included: true },
            { text: "1 team workspace", included: true },
            { text: "Advanced performance analytics", included: false },
            { text: "Smart workflow automations", included: false },
            { text: "24/7 Priority support", included: false }
        ]
    },

    {
        id: 2,
        name: "Pro",
        description: "The sweet spot for scaling teams who need deep analytics and automated workflows.",
        monthlyPrice: 19,
        annualPrice: 15, 
        featured: true,  
        features: [
            { text: "Unlimited Kanban boards", included: true },
            { text: "Built-in timers & reporting", included: true },
            { text: "Up to 5 team workspaces", included: true },
            { text: "Advanced performance analytics", included: true },
            { text: "Smart workflow automations", included: true },
            { text: "24/7 Priority support", included: false }
        ]
    },
    
    {
        id: 3,
        name: "Enterprise",
        description: "Custom capabilities, dedicated infrastructure, and advanced security controls for large organizations.",
        monthlyPrice: 49,
        annualPrice: 39, 
        featured: false,
        features: [
            { text: "Unlimited Kanban boards", included: true },
            { text: "Built-in timers & reporting", included: true },
            { text: "Unlimited team workspaces", included: true },
            { text: "Advanced performance analytics", included: true },
            { text: "Smart workflow automations", included: true },
            { text: "24/7 Priority support", included: true }
        ]
    }
];

export default pricingTiers;

