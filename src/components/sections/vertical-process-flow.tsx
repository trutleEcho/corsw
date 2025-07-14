"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, PenTool, Code, TestTube, Rocket, Heart } from "lucide-react"

interface ProcessStep {
    id: number
    title: string
    subtitle: string
    icon: React.ReactNode
}

const processSteps: ProcessStep[] = [
    {
        id: 1,
        title: "Business Analysis",
        subtitle: "Understanding requirements and objectives",
        icon: <Users className="w-6 h-6" />
    },
    {
        id: 2,
        title: "Design & Planning",
        subtitle: "Creating wireframes and technical specifications",
        icon: <PenTool className="w-6 h-6" />
    },
    {
        id: 3,
        title: "Development",
        subtitle: "Building robust, scalable solutions",
        icon: <Code className="w-6 h-6" />
    },
    {
        id: 4,
        title: "Testing & QA",
        subtitle: "Rigorous quality assurance and testing",
        icon: <TestTube className="w-6 h-6" />
    },
    {
        id: 5,
        title: "Deployment",
        subtitle: "Seamless launching and go-live support",
        icon: <Rocket className="w-6 h-6" />
    },
    {
        id: 6,
        title: "Client Satisfaction",
        subtitle: "Ongoing support and maintenance",
        icon: <Heart className="w-6 h-6" />
    }
]

interface ProcessStepCardProps {
    step: ProcessStep
    index: number
    isLast: boolean
}

const ProcessStepCard = ({ step, index, isLast }: ProcessStepCardProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex items-start"
        >
            {/* Vertical line connector */}
            {!isLast && (
                <div className="absolute left-4 md:left-6 top-10 md:top-16 w-px h-30 md:h-20 bg-border z-0" />
            )}

            {/* Step number indicator */}
            <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="flex items-center justify-center w-8 md:w-12 h-8 md:h-12 bg-accent/60 text-accent-foreground rounded-full font-semibold text-sm mr-6 z-10 relative"
            >
                {step.id}
            </motion.div>

            {/* Content card */}
            <Card className="flex-1 bg-gray-50 dark:bg-gray-800 border-border">
                <CardContent className="px-6">
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex flex-row items-center gap-4">
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg text-accent mt-1"
                            >
                                {step.icon}
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                                className="text-xl font-semibold text-primary mb-2"
                            >
                                {step.title}
                            </motion.h3>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                            className="text-muted-foreground leading-relaxed"
                        >
                            {step.subtitle}
                        </motion.p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default function VerticalProcessFlow() {
    const headerRef = useRef(null)
    const headerInView = useInView(headerRef, { once: true, margin: "-10%" })

    return (
        <section className="py-24 -z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        Our Development Process
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        From concept to completion, we follow a proven methodology
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {processSteps.map((step, index) => (
                        <ProcessStepCard
                            key={step.id}
                            step={step}
                            index={index}
                            isLast={index === processSteps.length - 1}
                        />
                    ))}
                </div>

                {/* Completion indicator */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: processSteps.length * 0.1 + 1 }}
                    className="flex justify-center mt-12"
                >
                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 border border-accent/20 px-6 py-3 rounded-full">
                        <CheckCircle className="w-5 h-5 text-green-700" />
                        <span className="text-sm font-medium text-green-700">Process Complete</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}