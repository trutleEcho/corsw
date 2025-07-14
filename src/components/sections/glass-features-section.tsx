"use client";

import { motion } from "framer-motion";
import {
    Code,
    Smartphone,
    Cpu,
    TrendingUp,
    Palette,
    Server
} from "lucide-react";

export default function GlassFeaturesSection() {

    const services = [
        {
            icon: Code,
            key: "web_development",
            gradient: "from-blue-500/20 to-cyan-500/20",
        },
        {
            icon: Smartphone,
            key: "mobile_apps",
            gradient: "from-purple-500/20 to-pink-500/20",
        },
        {
            icon: Cpu,
            key: "iot",
            gradient: "from-green-500/20 to-emerald-500/20",
        },
        {
            icon: TrendingUp,
            key: "digital_marketing",
            gradient: "from-orange-500/20 to-red-500/20",
        },
        {
            icon: Palette,
            key: "graphic_design",
            gradient: "from-pink-500/20 to-rose-500/20",
        },
        {
            icon: Server,
            key: "infrastructure",
            gradient: "from-indigo-500/20 to-blue-500/20",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <section id="services" className="section-padding py-24 relative overflow-hidden bg-gradient-to-b from-primary/60 via-gray-800/50 to-primary/60">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/60 to-white/5" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/40 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="container mx-auto relative z-10 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent dark:text-white"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Comprehensive technology solutions tailored to your business needs
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                >
                    {services.map((service, index) => {
                        const IconComponent = service.icon;

                        return (
                            <motion.div
                                key={service.key}
                                whileHover="hover"
                                className="group relative"
                            >
                                <motion.div
                                    className="relative h-full"
                                >
                                    {/* Glass Card */}
                                    <div className="relative h-full p-8 rounded-3xl border border-white/20 shadow-2xl overflow-hidden group-hover:glass-strong transition-all duration-500">

                                        {/* Gradient Background */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        {/* Border Glow Effect */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Icon Container */}
                                            <motion.div
                                                className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 border border-accent/30 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-500"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                            >
                                                <IconComponent className="w-8 h-8 text-white group-hover:text-white/60 transition-colors duration-300" />
                                            </motion.div>

                                            {/* Title */}
                                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white group-hover:text-white/80 transition-colors duration-300">
                                                {service.key === 'web_development' ? 'Web Development' :
                                                    service.key === 'mobile_apps' ? 'Mobile Applications' :
                                                        service.key === 'iot' ? 'IoT Solutions' :
                                                            service.key === 'digital_marketing' ? 'Digital Marketing' :
                                                                service.key === 'graphic_design' ? 'Graphic Design' :
                                                                    service.key === 'infrastructure' ? 'Infrastructure Management' : service.key}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed mb-6">
                                                {service.key === 'web_development' ? 'Custom web applications and responsive websites built with modern technologies.' :
                                                    service.key === 'mobile_apps' ? 'Native and cross-platform mobile solutions for iOS and Android platforms.' :
                                                        service.key === 'iot' ? 'Connected device ecosystems and smart automation solutions.' :
                                                            service.key === 'digital_marketing' ? 'Strategic online presence and growth solutions for your business.' :
                                                                service.key === 'graphic_design' ? 'Visual identity and brand communication design services.' :
                                                                    service.key === 'infrastructure' ? 'Scalable cloud and system architecture solutions.' : 'Professional technology services'}
                                            </p>

                                            {/* Features List */}
                                            <div className="space-y-2">
                                                {[
                                                    service.key === 'web_development' ? ['React & Next.js', 'Node.js Backend', 'Responsive Design'] :
                                                        service.key === 'mobile_apps' ? ['iOS Development', 'Android Development', 'Cross-Platform'] :
                                                            service.key === 'iot' ? ['Device Integration', 'Real-time Monitoring', 'Cloud Connectivity'] :
                                                                service.key === 'digital_marketing' ? ['SEO Optimization', 'Social Media', 'Content Strategy'] :
                                                                    service.key === 'graphic_design' ? ['Brand Identity', 'Web Graphics', 'Print Design'] :
                                                                        service.key === 'infrastructure' ? ['Cloud Migration', 'DevOps', 'Security Management'] : ['Feature 1', 'Feature 2', 'Feature 3']
                                                ][0].map((feature, featureIndex) => (
                                                    <motion.div
                                                        key={featureIndex}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                                                        className="flex items-center text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300"
                                                    >
                                                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                                                        {feature}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Hover Shimmer Effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <div className="px-8 py-4 rounded-2xl border border-accent/30 text-white font-semibold cursor-pointer hover:glass-strong transition-all duration-300">
                            Explore All Services →
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}