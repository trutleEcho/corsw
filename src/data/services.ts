import {Service} from "@/types/service";

export const services: Service[] = [
    {
        id: "1",
        title: "CRM System for Samarth Caters",
        description:
            "Built a comprehensive CRM system for Samarth Caters, including lead management, order tracking, analytics, and multi-lingual support for different generations.",
        client: "Samarth Caters",
        image: "/portfolio/samarth-caters-dashboard.png",
        technologies: ["Next.js", "Supabase"],
        deliverables: [
            "Lead management system",
            "Order tracking dashboard",
            "Analytics & reporting tools",
            "Multi-lingual support (English, regional languages)"
        ],
        fullDescription:
            "Samarth Caters, a well-known catering service provider, required a robust CRM solution to efficiently manage customer relationships, handle bulk orders, and analyze business growth. We developed a modern CRM platform tailored to their workflow, including lead management, order tracking, and multilingual support to bridge the gap between older and younger generations of staff and customers.",
        clientIndustry: "Food & Catering Services",
        projectDuration: "3 months",
        teamSize: "1 developers + 1 designer",
        results: [
            "Reduced order processing time by 60%",
            "Improved customer response time with automated follow-ups",
            "Enabled cross-generational adoption with multilingual support",
            "Centralized data improved business insights and reporting",
        ],
        testimonial: {
            quote:
                "The CRM system transformed how we handle our catering orders. The multilingual support ensured our entire team could use it comfortably, and the analytics gave us insights we never had before.",
            author: "Vishal Patil",
            position: "Owner, Samarth Caters",
        },
    },
];
