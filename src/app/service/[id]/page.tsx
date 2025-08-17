import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Building, Calendar, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import {services} from "@/data/services";



export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params
    const service = services.find((s) => s.id === id)

    if (!service) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-700/50 dark:from-background/80  to-background dark:to-blue-700 py-24">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Back Button */}
                <Link href="/portfolio">
                    <Button
                        variant="outline"
                        className="mb-8 group hover:bg-gray-900 hover:text-white transition-all duration-300 bg-transparent border-foreground"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Back to Showcase
                    </Button>
                </Link>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <Badge variant="default" className="text-sm font-medium px-4 py-2">
                                CUSTOM SERVICE
                            </Badge>
                            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-primary">
                                {service.title}
                            </h1>
                            <div className="flex items-center gap-2 text-lg text-blue-600">
                                <Building className="w-5 h-5" />
                                <span className="font-medium">{service.client}</span>
                            </div>
                            <p className="text-xl text-foreground leading-relaxed">{service.fullDescription}</p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {service.technologies.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="outline"
                                    className="px-3 py-1 hover:bg-blue-50 hover:border-blue-300 transition-colors border-foreground"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Get Similar Service
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-2xl blur-3xl" />
                        <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>

                {/* Project Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-blue-500 to-blue-500">
                        <Building className="w-8 h-8 mx-auto mb-3 text-blue-50" />
                        <h3 className="font-semibold text-white mb-1">Industry</h3>
                        <p className="text-white/80">{service.clientIndustry}</p>
                    </Card>
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-blue-500 to-blue-500">
                        <Calendar className="w-8 h-8 mx-auto mb-3 text-blue-50" />
                        <h3 className="font-semibold text-white mb-1">Duration</h3>
                        <p className="text-white/80">{service.projectDuration}</p>
                    </Card>
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-blue-500 to-blue-500">
                        <Users className="w-8 h-8 mx-auto mb-3 text-blue-50" />
                        <h3 className="font-semibold text-white mb-1">Team</h3>
                        <p className="text-white/80">{service.teamSize}</p>
                    </Card>
                </div>

                {/* Deliverables & Results */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-white dark:from-white/10 to-blue-500">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Project Deliverables</h2>
                        <div className="space-y-4">
                            {service.deliverables.map((deliverable, index) => (
                                <div key={index} className="flex items-center gap-3 group">
                                    <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                                    <span className="text-foreground/80 group-hover:text-foreground transition-colors font-medium">{deliverable}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-primary to-white-500">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Results Achieved</h2>
                        <div className="space-y-4">
                            {service.results.map((result, index) => (
                                <div key={index} className="flex items-start gap-3 group">
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2 group-hover:scale-125 transition-transform" />
                                    <span className="text-foreground/80 group-hover:text-foreground transition-colors font-medium">{result}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Testimonial */}
                {service.testimonial && (
                    <Card className="p-8 bg-gradient-to-r from-primary/80 to-primary/40">
                        <div className="text-center space-y-4">
                            <div className="text-4xl text-white">&quot;</div>
                            <blockquote className="text-xl text-white italic leading-relaxed max-w-4xl mx-auto">
                                {service.testimonial.quote}
                            </blockquote>
                            <div className="space-y-1">
                                <div className="font-semibold text-white/60">{service.testimonial.author}</div>
                                <div className="text-white">{service.testimonial.position}</div>
                            </div>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    )
}
