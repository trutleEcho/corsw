export interface Product {
    id: string
    title: string
    description: string
    image: string
    gallery: string[]
    technologies: string[]
    liveUrl?: string
    contact?: string
    downloadUrl?: string
    category: "web" | "mobile" | "desktop" | "api"
    fullDescription: string
    features: string[]
    timeline: string
    teamSize: string
    challenges: string[]
    solutions: string[]
    stats: {
        stars?: number
        views?: number
        forks?: number
        downloads?: number
    }
    testimonials: {
        name: string
        role: string
        company: string
        content: string
        avatar: string
    }[]
}
