import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    ArrowLeft,
    Download,
    Star,
    Eye,
    ExternalLink, ViewIcon
} from "lucide-react"
import Link from "next/link"
import { ImageGallery } from "@/components/sections/image-gallery"
import {products} from "@/data/products";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === params.id)

    if (!product) {
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
                        Back to Portfolio
                    </Button>
                </Link>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <Badge variant="default" className="text-sm font-medium px-4 py-2">
                                {product.category.toUpperCase()}
                            </Badge>
                            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-primary">
                                {product.title}
                            </h1>
                            <p className="text-xl text-foreground leading-relaxed">{product.fullDescription}</p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {product.technologies.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="outline"
                                    className="px-3 py-1 hover:bg-blue-50 hover:border-blue-300 transition-colors border-foreground"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            {product.liveUrl && (
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <a href={product.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <Eye className="w-4 h-4 mr-2" />
                                        Visit Live Site
                                    </a>
                                </Button>
                            )}
                            {product.downloadUrl && (
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <a href={product.downloadUrl} target="_blank" rel="noopener noreferrer">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Now
                                    </a>
                                </Button>
                            )}
                            {product.contact && (
                                <Button
                                    asChild
                                    variant="outline"
                                    className="hover:bg-gray-900 hover:text-white transition-all duration-300 bg-transparent border-foreground"
                                >
                                    <a
                                        href={product.contact}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Contact Sales
                                    </a>
                                </Button>
                            )}
                        </div>

                        {Object.keys(product.stats).length > 0 && (
                            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
                                {product.stats.stars && (
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-500" />
                                        <span>{product.stats.stars.toLocaleString()} stars</span>
                                    </div>
                                )}
                                {product.stats.downloads && (
                                    <div className="flex items-center gap-1">
                                        <Download className="w-4 h-4 text-green-500" />
                                        <span>{product.stats.downloads.toLocaleString()} downloads</span>
                                    </div>
                                )}
                                {product.stats.views && (
                                    <div className="flex items-center gap-1">
                                        <ViewIcon className="w-4 h-4 text-green-500" />
                                        <span>{product.stats.views.toLocaleString()} views</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <ImageGallery images={product.gallery} title={product.title} />
                    </div>
                </div>

                {/* Project Stats */}
                {/*<div className="grid md:grid-cols-3 gap-6 mb-16">*/}
                {/*    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">*/}
                {/*        <Calendar className="w-8 h-8 mx-auto mb-3 text-blue-600" />*/}
                {/*        <h3 className="font-semibold text-gray-900 mb-1">Timeline</h3>*/}
                {/*        <p className="text-gray-600">{product.timeline}</p>*/}
                {/*    </Card>*/}
                {/*    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">*/}
                {/*        <Users className="w-8 h-8 mx-auto mb-3 text-green-600" />*/}
                {/*        <h3 className="font-semibold text-gray-900 mb-1">Team Size</h3>*/}
                {/*        <p className="text-gray-600">{product.teamSize}</p>*/}
                {/*    </Card>*/}
                {/*    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">*/}
                {/*        <Zap className="w-8 h-8 mx-auto mb-3 text-purple-600" />*/}
                {/*        <h3 className="font-semibold text-gray-900 mb-1">Category</h3>*/}
                {/*        <p className="text-gray-600">{product.category} Application</p>*/}
                {/*    </Card>*/}
                {/*</div>*/}

                {/* Features Section */}
                <Card className="p-8 mb-12 border-0 shadow-xl bg-gradient-to-br from-blue-200 to-blue-500">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-primary mb-8">
                        Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {product.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 group p-4 rounded-lg transition-all duration-300"
                            >
                                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1.5 group-hover:scale-125 transition-transform flex-shrink-0" />
                                <span className="text-white transition-colors font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </Card>

                {product.testimonials.length > 0 && (
                    <Card className="p-8 mb-12 border-0 shadow-xl bg-gradient-to-br from-background/5 via-primary to-blue-500">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-primary mb-8">
                            What Users Say
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {product.testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-transparent p-6 rounded-xl shadow-xl hover:shadow-xl transition-shadow duration-300"
                                >
                                    <p className="text-muted-foreground mb-4 italic">&quot;{testimonial.content}&quot;</p>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-white">{testimonial.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.role} at {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                )}

                {/* Challenges & Solutions */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-white dark:from-white/10 to-green-500">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Technical Challenges</h2>
                        <div className="space-y-6">
                            {product.challenges.map((challenge, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300"
                                >
                                    <div className="w-3 h-3 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                                    <span className="text-foreground/80 font-medium">{challenge}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-primary to-white-500">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Our Solutions</h2>
                        <div className="space-y-6">
                            {product.solutions.map((solution, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300"
                                >
                                    <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                                    <span className="text-foreground/80 font-medium">{solution}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
