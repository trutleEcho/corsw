export interface Service {
    id: string
    title: string
    description: string
    client: string
    image: string
    technologies: string[]
    deliverables: string[]
    fullDescription: string
    clientIndustry: string
    projectDuration: string
    teamSize: string
    results: string[]
    testimonial?: {
        quote: string
        author: string
        position: string
    }
}