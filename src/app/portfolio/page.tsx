"use client"

import {useState, useEffect} from "react"
import {Card} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {ChevronLeft, ChevronRight, Download, ExternalLink, PhoneCall} from "lucide-react"
import {GeometricShapes} from "@/components/ui/geometric-shapes";
import Image from "next/image";
import Link from "next/link";

interface Product {
    id: string
    title: string
    description: string
    image: string
    technologies: string[]
    liveUrl?: string
    downloadUrl?: string
    contact?: string
    category: "web" | "mobile" | "desktop" | "api"
}

interface Client {
    id: string
    name: string
    logo: string
    project: string
    description: string
    industry: string
}

interface Service {
    id: string
    title: string
    description: string
    client: string
    image: string
    technologies: string[]
    deliverables: string[]
}

const products: Product[] = [
    {
        id: "1",
        title: "Queue",
        description:
            "A comprehensive appointment scheduling and management solution for services and appointments.",
        image: "/portfolio/queue.png",
        technologies: ["Next.js", "Ktor", "MongoDB", "WebSocket"],
        liveUrl: "https://queue-roan.vercel.app/home",
        contact: "https://github.com/user/taskflow-pro",
        category: "web",
    },
    {
        id: "2",
        title: "Budgety",
        description:
            "Modern and user-friendly budgeting app for tracking expenses and income,saving goals, budgets, assets, liabilities and financial progress.",
        image: "/portfolio/budgety-dashboard.jpg",
        technologies: ["React Native", "Expo", "EAS", "MongoDB"],
        downloadUrl: "http://localhost:3000/CORSWBudgety010.apk",
        category: "mobile",
    },
    {
        id: "3",
        title: "BCircle",
        description: "A secure and user-friendly mobile application for managing small group chit funds.",
        image: "/portfolio/bcircle-dashboard.jpg",
        technologies: ["React Native", "Expo", "EAS", "Firebase"],
        downloadUrl: "http://localhost:3000/CORSWBCircle100.apk",
        category: "mobile",
    },
]

const clients: Client[] = [
    {
        id: "1",
        name: "Gaurishankar Tours and Travels",
        logo: "/portfolio/GS_TnT_LABLE.png",
        project: "Digital Marketing Platform",
        description: "A platform for showcasing tours and travel services to potential customers.",
        industry: "Tourism",
    },
    {
        id: "2",
        name: "Duhitta",
        logo: "/portfolio/duhitta_logo.png",
        project: "Fashion Brand",
        description: "Managing online sales and customer engagement for a fashion brand. Ecommerce website and mobile app development(Comming soon).",
        industry: "Fashion",
    }
]

const services: Service[] = [
    {
        id: "1",
        title: "CRM System for Samarth Caters",
        description:
            "Built a comprehensive CRM system for Samarth Caters, including lead management, order tracking, and analytics. Also provided multi-lingual support for older and younger generations. ",
        client: "Samarth Caters",
        image: "/portfolio/samarth-caters-dashboard.png",
        technologies: ["Next.js", "Supabase"],
        deliverables: ["Custom storefront", "Admin dashboard", "Payment integration", "Analytics system"],
    }
]

export default function Portfolio() {
    const [currentClient, setCurrentClient] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            {threshold: 0.1},
        )

        const element = document.getElementById("showcase-container")
        if (element) observer.observe(element)

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentClient((prev) => (prev + 1) % clients.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    const nextClient = () => {
        setCurrentClient((prev) => (prev + 1) % clients.length)
    }

    const prevClient = () => {
        setCurrentClient((prev) => (prev - 1 + clients.length) % clients.length)
    }

    return (
        <main className='bg-white dark:bg-gray-900'>
            <GeometricShapes/>
            <div
                id="showcase-container"
                className={`w-full mx-auto px-6 py-16 space-y-24 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
                {/* Products Section */}
                <section className="space-y-24 mt-16">
                    <div className="text-center space-y-4">
                        <div className="inline-block">
                            <Badge
                                variant="outline"
                                className="text-xs font-medium tracking-wide uppercase mb-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 text-blue-700"
                            >
                                Our Products
                            </Badge>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-gray-700 bg-clip-text text-transparent leading-tight">
                            Innovative Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Cutting-edge software products designed to solve complex problems with elegant simplicity.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {products.map((product, index) => (
                            <Card
                                key={product.id}
                                className="max-w-7xl mx-auto group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white/80 dark:bg-gray-700/40 backdrop-blur-sm hover:bg-white"
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                    animation: isVisible ? "slideInUp 0.6s ease-out forwards" : "none",
                                }}
                            >
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-2/5 relative overflow-hidden px-4 md:px-8">

                                        <Image
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.title}
                                            width={500}
                                            height={500}
                                            className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-lg"
                                        />
                                    </div>
                                    <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="space-y-6">
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <Badge
                                                        variant="secondary"
                                                        className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 text-primary hover:bg-gray-200 transition-colors"
                                                    >
                                                        {product.category.toUpperCase()}
                                                    </Badge>
                                                </div>
                                                <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                                                    {product.title}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed text-lg">{product.description}</p>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {product.technologies.map((tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="outline"
                                                        className="text-xs px-3 py-1 border-gray-200 text-foreground hover:border-blue-300 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <div className="flex gap-4 pt-2">
                                                {product.liveUrl && (
                                                    <Link target="_blank" href={product.liveUrl}>
                                                        <Button
                                                            className="group/btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                                            <ExternalLink
                                                                className="w-4 h-4 mr-2 transition-transform group-hover/btn:rotate-12"/>
                                                            View Live
                                                        </Button>
                                                    </Link>
                                                )}
                                                {product.downloadUrl && (
                                                    <a target="_blank" href={product.downloadUrl}>
                                                        <Button
                                                            className="group/btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                                            <Download
                                                                className="w-4 h-4 mr-2 transition-transform group-hover/btn:rotate-12"/>
                                                            Download App
                                                        </Button>
                                                    </a>
                                                )}
                                                {product.contact && (
                                                    <Button
                                                        variant="outline"
                                                        className="border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 bg-transparent"
                                                    >
                                                        <PhoneCall className="w-4 h-4 mr-2"/>
                                                        Contact Sales
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Our Clients Section with Carousel */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <div className="inline-block">
                            <Badge
                                variant="outline"
                                className="text-xs font-medium tracking-wide uppercase mb-4 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-700"
                            >
                                Our Clients
                            </Badge>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-gray-600 bg-clip-text text-transparent leading-tight">
                            Trusted Partners
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Building lasting relationships with industry leaders across diverse sectors.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <Card
                            className="overflow-hidden border-0 shadow-lg bg-white/90 dark:bg-gray-700/20 backdrop-blur-sm"
                            onMouseEnter={() => clearInterval}
                        >
                            <div
                                className="flex flex-col lg:flex-row items-center p-8 lg:p-12 transition-all duration-700 ease-in-out"
                                key={currentClient}
                            >
                                <div className="lg:w-1/3 text-center mb-8 lg:mb-0 space-y-4">
                                    <div className="relative group">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"/>
                                        <Image
                                            src={clients[currentClient].logo || "/placeholder.svg"}
                                            alt={clients[currentClient].name}
                                            className="relative w-32 h-20 object-contain mx-auto transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                                            width={256}
                                            height={256}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl lg:text-2xl font-bold text-foreground">{clients[currentClient].name}</h3>
                                        <Badge
                                            variant="secondary"
                                            className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200"
                                        >
                                            {clients[currentClient].industry}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="lg:w-2/3 lg:pl-12 space-y-4 text-center lg:text-left">
                                    <h4 className="text-xl lg:text-2xl font-bold text-foreground">{clients[currentClient].project}</h4>
                                    <p className="text-muted-foreground leading-relaxed text-lg">{clients[currentClient].description}</p>
                                </div>
                            </div>
                        </Card>

                        {/* Carousel Controls */}
                        <div className="flex justify-center mt-8 gap-6 items-center">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={prevClient}
                                className="border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 bg-transparent"
                            >
                                <ChevronLeft className="w-4 h-4 mr-1"/>
                                Previous
                            </Button>

                            <div className="flex items-center gap-3">
                                {clients.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentClient(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                                            index === currentClient
                                                ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                                                : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    />
                                ))}
                            </div>

                            <Button
                                variant="outline"
                                size="sm"
                                onClick={nextClient}
                                className="border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 bg-transparent"
                            >
                                Next
                                <ChevronRight className="w-4 h-4 ml-1"/>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <div className="inline-block">
                            <Badge
                                variant="outline"
                                className="text-xs font-medium tracking-wide uppercase mb-4 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 text-purple-700"
                            >
                                Custom Services
                            </Badge>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-gray-600 bg-clip-text text-transparent leading-tight">
                            Tailored Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Bespoke software development services crafted to meet unique business requirements.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {services.map((service, index) => (
                            <Card
                                key={service.id}
                                className="max-w-6xl mx-auto group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white/80 dark:bg-gray-700/40 backdrop-blur-sm hover:bg-white"
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                    animation: isVisible ? "slideInUp 0.6s ease-out forwards" : "none",
                                }}
                            >
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-2/5 relative overflow-hidden p-4 md:px-8">

                                        <Image
                                            src={service.image || "/placeholder.svg"}
                                            alt={service.title}
                                            className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-lg"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="space-y-6">
                                            <div className="space-y-3">
                                                <div
                                                    className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
                                                    Client: {service.client}
                                                </div>
                                                <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-purple-600 transition-colors duration-300">
                                                    {service.title}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="text-sm font-semibold text-muted-foreground/50 mb-3">Technologies
                                                        Used:</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {service.technologies.map((tech) => (
                                                            <Badge
                                                                key={tech}
                                                                variant="outline"
                                                                className="text-xs px-3 py-1 border-gray-200 text-foreground hover:border-purple-300 hover:text-purple-600 transition-all duration-300 hover:scale-105"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="text-sm font-semibold text-muted-foreground/50 mb-3">Key
                                                        Deliverables:</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                        {service.deliverables.map((deliverable, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center gap-3 text-sm text-muted-foreground group/item hover:text-foreground transition-colors"
                                                            >
                                                                <div
                                                                    className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover/item:scale-125 transition-transform"/>
                                                                {deliverable}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                <style jsx>{`
                    @keyframes slideInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
            </div>
        </main>
    )
}
