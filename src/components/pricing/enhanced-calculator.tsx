"use client"

import { useState } from "react"
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Calculator, DollarSign, Clock, Target } from "lucide-react"
import {Separator} from "@/components/ui/separator";
import {GeometricShapes} from "@/components/ui/geometric-shapes";

interface ProjectType {
    id: string
    name: string
    minPrice: number
    maxPrice: number
}

interface AdditionalFeature {
    id: string
    name: string
    price: number
    checked: boolean
}

const projectTypes: ProjectType[] = [
    { id: "web", name: "Web Development", minPrice: 5000, maxPrice: 25000 },
    { id: "mobile", name: "Mobile App", minPrice: 8000, maxPrice: 40000 },
    { id: "iot", name: "IoT Solution", minPrice: 10000, maxPrice: 50000 },
    { id: "marketing", name: "Digital Marketing", minPrice: 2000, maxPrice: 10000 },
    { id: "infrastructure", name: "Infrastructure Setup", minPrice: 3000, maxPrice: 15000 },
    { id: "design", name: "Graphic Design", minPrice: 1000, maxPrice: 8000 }
]

const complexityMultipliers = {
    basic: { name: "Basic", multiplier: 1 },
    intermediate: { name: "Intermediate", multiplier: 1.5 },
    advanced: { name: "Advanced", multiplier: 2 },
    enterprise: { name: "Enterprise", multiplier: 3 }
}

const timelineMultipliers = {
    rush: { name: "Rush (< 2 months)", multiplier: 1.5 },
    standard: { name: "Standard (2-6 months)", multiplier: 1 },
    extended: { name: "Extended (> 6 months)", multiplier: 0.9 }
}

export default function PriceCalculator() {
    const [selectedProjectType, setSelectedProjectType] = useState<string>("")
    const [selectedComplexity, setSelectedComplexity] = useState<string>("")
    const [selectedTimeline, setSelectedTimeline] = useState<string>("")
    const [additionalFeatures, setAdditionalFeatures] = useState<AdditionalFeature[]>([
        { id: "database", name: "Database Integration", price: 2000, checked: false },
        { id: "api", name: "API Development", price: 3000, checked: false },
        { id: "integrations", name: "Third-party Integrations", price: 1500, checked: false },
        { id: "admin", name: "Custom Admin Panel", price: 4000, checked: false },
        { id: "multilang", name: "Multi-language Support", price: 2500, checked: false }
    ])

    const handleFeatureToggle = (featureId: string) => {
        setAdditionalFeatures(prev =>
            prev.map(feature =>
                feature.id === featureId
                    ? { ...feature, checked: !feature.checked }
                    : feature
            )
        )
    }

    const calculatePrice = () => {
        if (!selectedProjectType || !selectedComplexity || !selectedTimeline) {
            return { min: 0, max: 0, additionalCost: 0 }
        }

        const projectType = projectTypes.find(p => p.id === selectedProjectType)
        const complexityMultiplier = complexityMultipliers[selectedComplexity as keyof typeof complexityMultipliers]?.multiplier || 1
        const timelineMultiplier = timelineMultipliers[selectedTimeline as keyof typeof timelineMultipliers]?.multiplier || 1
        const additionalCost = additionalFeatures.reduce((sum, feature) =>
            feature.checked ? sum + feature.price : sum, 0
        )

        if (!projectType) return { min: 0, max: 0, additionalCost: 0 }

        const baseMin = projectType.minPrice * complexityMultiplier * timelineMultiplier
        const baseMax = projectType.maxPrice * complexityMultiplier * timelineMultiplier

        return {
            min: baseMin + additionalCost,
            max: baseMax + additionalCost,
            additionalCost
        }
    }

    const priceCalculation = calculatePrice()
    const hasAllSelections = selectedProjectType && selectedComplexity && selectedTimeline

    return (
        <section id="pricing" className="relative z-10">
            <GeometricShapes/>
            <div className="container mx-auto px-6 max-w-6xl py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <h2 className="text-4xl md:text-5xl font-bold ">
                            Project Cost Calculator
                        </h2>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get an instant estimate for your software project
                    </p>
                </motion.div>

                <Separator className="mb-16" />

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Project Type Selection */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <Card className="bg-gray-50 dark:bg-gray-800 border-border">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center gap-2 text-primary">
                                        <Target className="h-5 w-5 text-primary" />
                                        Project Type
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground">
                                        Select the type of project you need
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RadioGroup
                                        value={selectedProjectType}
                                        onValueChange={setSelectedProjectType}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >
                                        {projectTypes.map((type) => (
                                            <div key={type.id} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-accent/50 transition-colors">
                                                <RadioGroupItem value={type.id} id={type.id} />
                                                <div className="flex-1">
                                                    <Label htmlFor={type.id} className="text-primary font-medium cursor-pointer">
                                                        {type.name}
                                                    </Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        ₹{type.minPrice.toLocaleString()} - ₹{type.maxPrice.toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Complexity and Timeline */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Card className="bg-gray-50 dark:bg-gray-800 border-border h-full">
                                    <CardHeader>
                                        <CardTitle className="text-primary">Project Complexity</CardTitle>
                                        <CardDescription className="text-muted-foreground">
                                            Choose complexity level
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Select value={selectedComplexity} onValueChange={setSelectedComplexity}>
                                            <SelectTrigger className="bg-input border-border text-primary">
                                                <SelectValue placeholder="Select complexity" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-popover border-border">
                                                {Object.entries(complexityMultipliers).map(([key, { name, multiplier }]) => (
                                                    <SelectItem key={key} value={key} className="text-popover-foreground">
                                                        {name} ({multiplier}x)
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Card className="bg-gray-50 dark:bg-gray-800 border-border h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-primary">
                                            <Clock className="h-5 w-5 text-primary" />
                                            Timeline
                                        </CardTitle>
                                        <CardDescription className="text-muted-foreground">
                                            Project delivery timeline
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <RadioGroup
                                            value={selectedTimeline}
                                            onValueChange={setSelectedTimeline}
                                            className="space-y-3"
                                        >
                                            {Object.entries(timelineMultipliers).map(([key, { name, multiplier }]) => (
                                                <div key={key} className="flex items-center space-x-3">
                                                    <RadioGroupItem value={key} id={key} />
                                                    <Label htmlFor={key} className="text-primary cursor-pointer flex-1">
                                                        {name}
                                                        <span className="text-muted-foreground text-sm ml-2">
                              ({multiplier}x)
                            </span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Additional Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Card className="bg-gray-50 dark:bg-gray-800 border-border">
                                <CardHeader>
                                    <CardTitle className="text-primary">Additional Features</CardTitle>
                                    <CardDescription className="text-muted-foreground">
                                        Enhance your project with these optional features
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {additionalFeatures.map((feature) => (
                                            <div key={feature.id} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-accent/50 transition-colors">
                                                <Checkbox
                                                    id={feature.id}
                                                    checked={feature.checked}
                                                    onCheckedChange={() => handleFeatureToggle(feature.id)}
                                                />
                                                <div className="flex-1">
                                                    <Label htmlFor={feature.id} className="text-primary cursor-pointer">
                                                        {feature.name}
                                                    </Label>
                                                    <p className="text-sm font-medium text-muted-foreground">
                                                        +₹{feature.price.toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Price Display */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-1"
                    >
                        <Card className="bg-gray-50 dark:bg-gray-800 border-border sticky top-8">
                            <CardHeader className="text-center">
                                <CardTitle className="flex items-center justify-center gap-2 text-primary">
                                    Estimated Cost
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {hasAllSelections ? (
                                    <>
                                        <motion.div
                                            key={`${priceCalculation.min}-${priceCalculation.max}`}
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-center p-6 rounded-lg border border-border"
                                        >
                                            <div className="text-3xl md:text-4xl font-bold mb-2">
                                                ₹{priceCalculation.min.toLocaleString()} - ₹{priceCalculation.max.toLocaleString()}
                                            </div>
                                            <p className="text-muted-foreground">Total Project Cost</p>
                                        </motion.div>

                                        {priceCalculation.additionalCost > 0 && (
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Additional Features:</span>
                                                    <span className="font-medium">
                            +₹{priceCalculation.additionalCost.toLocaleString()}
                          </span>
                                                </div>
                                            </div>
                                        )}

                                        <Button className="w-full bg-primary/10 hover:bg-primary/90 text-accent-foreground font-medium">
                                            Get Detailed Quote
                                        </Button>
                                    </>
                                ) : (
                                    <div className="text-center py-12">
                                        <DollarSign className="h-16 w-16 text-muted mx-auto mb-4 opacity-50" />
                                        <p className="text-muted-foreground">
                                            Complete the form to see your estimated cost
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}