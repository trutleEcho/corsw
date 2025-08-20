import {Product} from "@/types/product";

export const products: Product[] = [
    {
        id: "1",
        title: "Queue",
        description:
            "A comprehensive appointment scheduling and management solution for services and appointments.",
        image: "/portfolio/queue.png",
        gallery: [
            "/portfolio/queue.png"
        ],
        technologies: ["Next.js", "Ktor", "MongoDB", "WebSocket"],
        liveUrl: "https://queue-roan.vercel.app/home",
        contact: "https://wa.me/919175395577?text=I%20am%20interested%20to%20get%20Queue",
        downloadUrl: "",
        category: "web",
        fullDescription:
            "Queue is a modern appointment scheduling and management solution designed for businesses and service providers. It helps streamline bookings, manage customer wait times, and improve overall client experience with real-time updates and notifications.",
        features: [
            "Real-time appointment scheduling",
            "Customer waitlist management",
            "Service provider dashboard",
            "Automated notifications and reminders",
            "Analytics and reports",
        ],
        timeline: "7 months",
        teamSize: "3 developers",
        challenges: [
            "Managing concurrent appointment bookings",
            "Providing real-time updates across multiple clients",
        ],
        solutions: [
            "Implemented WebSocket for instant synchronization",
            "Designed scalable MongoDB schema for handling bookings",
        ],
        stats: {
            stars: 4,
            downloads: 10,
        },
        testimonials: [
            {
                name: "Ravi Patel",
                role: "Salon Owner",
                company: "StyleHub",
                content: "Queue made it so easy to manage appointments without double-booking. My customers love the notifications!",
                avatar: "/default-user.png",
            },
        ],
    },
    {
        id: "2",
        title: "Budgety",
        description:
            "Modern and user-friendly budgeting app for tracking expenses and income, saving goals, budgets, assets, liabilities, and financial progress.",
        image: "/portfolio/budgety-dashboard.jpg",
        gallery: [
            "/portfolio/budgety-dashboard.jpg"
        ],
        technologies: ["React Native", "Expo", "EAS", "MongoDB"],
        liveUrl: "",
        contact: "https://wa.me/919175395577?text=I%20am%20interested%20to%20get%20Budgety",
        downloadUrl: "https://corsw.vercel.app/CORSWBudgety103.apk",
        category: "mobile",
        fullDescription:
            "Budgety is a personal finance companion designed to make budgeting simple and effective. It allows users to track expenses, incomes, savings goals, and monitor their financial health over time with intuitive dashboards.",
        features: [
            "Expense and income tracking",
            "Customizable budget categories",
            "Savings goal management",
            "Assets and liabilities tracking",
            "Financial progress dashboard",
        ],
        timeline: "5 months",
        teamSize: "2 developers",
        challenges: [
            "Offline-first support for mobile users",
            "Efficiently handling recurring transactions",
        ],
        solutions: [
            "Used local MongoDB sync with cloud storage",
            "Implemented recurring transaction logic with reminders",
        ],
        stats: {
            downloads: 12,
            views: 40,
        },
        testimonials: [
            {
                name: "Priya Sharma",
                role: "Freelancer",
                company: "Independent",
                content: "Budgety helped me gain control over my finances. The savings goals feature is amazing!",
                avatar: "/default-user.png",
            },
        ],
    },
    {
        id: "3",
        title: "BCircle",
        description:
            "A secure and user-friendly mobile application for managing small group chit funds.",
        image: "/portfolio/bcircle-dashboard.jpg",
        gallery: [
            "/portfolio/bcircle-dashboard.jpg"
        ],
        technologies: ["React Native", "Expo", "EAS", "Firebase"],
        liveUrl: "",
        contact: "\"https://wa.me/919175395577?text=I%20am%20interested%20to%20get%20BCircle\"",
        downloadUrl: "https://corsw.vercel.app/CORSWBCircle100.apk",
        category: "mobile",
        fullDescription:
            "BCircle is designed to simplify the management of small group chit funds. It ensures transparency, automates collection tracking, and provides secure communication between group members.",
        features: [
            "Group chit fund creation and management",
            "Automated collection reminders",
            "Transaction history tracking",
            "Member notifications",
            "Firebase secure authentication",
        ],
        timeline: "6 months",
        teamSize: "3 developers",
        challenges: [
            "Ensuring secure fund management and privacy",
            "Providing real-time updates for group transactions",
        ],
        solutions: [
            "Used Firebase authentication and Firestore rules for data protection",
            "Enabled real-time updates via Firebase subscriptions",
        ],
        stats: {
            downloads: 5,
            views: 20,
        },
        testimonials: [
            {
                name: "Anil Kumar",
                role: "Community Organizer",
                company: "Local Fund Group",
                content: "BCircle made chit fund management transparent and stress-free. Our group loves it!",
                avatar: "/default-user.png",
            },
        ],
    },
];
