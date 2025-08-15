"use client";

import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {ArrowRight, Sparkles, Star, Users, TrendingUp, Zap, Play} from 'lucide-react';
import Link from "next/link";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
}

const generateParticles = (count: number): Particle[] => {
    return Array.from({length: count}, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 20 + 10,
    }));
};

export default function GlassHeroSection() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Only run on the client
        setParticles(generateParticles(50));
    }, []);

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 1,
            },
        },
    };

    const statsData = [
        {icon: Users, label: "Happy Clients", value: "15+"},
        {icon: TrendingUp, label: "Completed", value: "30+"},
        {icon: Star, label: "Client Rating", value: "4.9"},
        {icon: Zap, label: "Uptime", value: "99.9%"},
    ];

    return (
        <section className="relative min-h-screen overflow-hidden pt-20">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary/40 to-primary/60">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-primary/10 to-transparent"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </div>

                {/* Mesh Gradient Overlay */}
                <div className="absolute inset-0 opacity-30">
                    <motion.div
                        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary to-transparent rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-secondary rounded-full"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            opacity: particle.opacity,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [particle.opacity, 0, particle.opacity],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <motion.div
                className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="text-center space-y-8 mb-16">
                    {/* Logo/Brand */}
                    <motion.div className="flex justify-center mb-8">
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary blur-xl opacity-50"/>
                            <div className="relative rounded-2xl p-6">
                                <Sparkles className="h-12 w-12 mx-auto text-white"/>
                            </div>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.div className="space-y-6">
                        <h1 className="hero-text font-bold tracking-tight text-white">
                          <span className="block">
                            Corner Softwares
                          </span>
                        </h1>

                        <motion.p
                            className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-white/80"
                        >
                            Transforming businesses with cutting-edge technology. From web applications to IoT systems,
                            we deliver excellence at every corner.
                        </motion.p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/contact" className="transition-smooth">
                            <Button
                                size="lg"
                                className="group relative overflow-hidden bg-primary/90 hover:bg-primary/20 hover:cursor-pointer border border-accent/20 font-semibold px-8 py-6 text-lg h-auto transition-smooth"
                            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1"/>
              </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    whileHover={{scale: 1.05}}
                                />
                            </Button>
                        </Link>
                        <Link href="/portfolio" className="transition-smooth">

                            <Button
                                variant="outline"
                                size="lg"
                                className="group font-semibold px-8 py-6 text-lg h-auto border-white/20 hover:bg-white/10 hover:cursor-pointer"
                            >
                              <span className="flex items-center gap-3">
                                <Play className="h-5 w-5"/>
                                    Check Our Portfolio
                              </span>
                            </Button>
                        </Link>

                    </motion.div>
                </div>

                {/* Floating Stats Cards */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto"
                >
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial="initial"
                            animate="animate"
                            style={{animationDelay: `${index * 0.5}s`}}
                            whileHover={{scale: 1.05, y: -5}}
                            className="group"
                        >
                            <Card
                                className="relative p-6 text-center hover:glass-strong transition-all duration-300 bg-primary/10 border-none">
                                {/* Glow Effect */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"/>

                                <div className="relative z-10 space-y-3">
                                    <div className="flex justify-center">
                                        <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-white">
                                            <stat.icon className="h-6 w-6"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-2xl lg:text-3xl font-bold mb-1 text-white">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm60 text-white">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    className="mt-16 text-center text-white"
                >
                    <p className="mb-6">Trusted by innovative companies</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        <div className="flex items-center gap-2 text-sm font-medium text-white">
                            <Star className="h-5 w-5"/>
                            <span>5-Star Rated</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-white">
                            <Users className="h-5 w-5"/>
                            <span>Enterprise Ready</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-white">
                            <Zap className="h-5 w-5"/>
                            <span>Lightning Fast</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"/>
        </section>
    );
}