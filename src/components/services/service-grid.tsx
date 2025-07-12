'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Code,
    Smartphone,
    Globe,
    BarChart3,
    Palette,
    Shield,
    ArrowRight
} from 'lucide-react';

const services = [
    {
        icon: Code,
        title: 'Custom Software Development',
        description: 'Tailored solutions built with modern technologies to solve your unique business challenges.',
        features: ['Web Applications', 'API Development', 'System Integration', 'Legacy Modernization'],
        price: 'From $15,000',
        badge: 'Most Popular'
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
        features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
        price: 'From $20,000',
        badge: null
    },
    {
        icon: Globe,
        title: 'Web Development',
        description: 'Responsive, fast, and SEO-optimized websites that convert visitors into customers.',
        features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'Performance Optimization'],
        price: 'From $8,000',
        badge: 'Quick Start'
    },
    {
        icon: BarChart3,
        title: 'Digital Marketing',
        description: 'Data-driven marketing strategies that increase your online presence and drive growth.',
        features: ['SEO Optimization', 'PPC Campaigns', 'Social Media', 'Analytics'],
        price: 'From $3,000/month',
        badge: null
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive designs that enhance user experience and drive engagement.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
        price: 'From $5,000',
        badge: null
    },
    {
        icon: Shield,
        title: 'Cybersecurity',
        description: 'Comprehensive security solutions to protect your digital assets and customer data.',
        features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Monitoring'],
        price: 'From $2,500/month',
        badge: 'Enterprise'
    }
];

export function ServiceGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
                <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="h-full"
                >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <motion.div
                                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <service.icon className="w-6 h-6 text-white" />
                                </motion.div>
                                {service.badge && (
                                    <Badge variant="secondary" className="text-xs">
                                        {service.badge}
                                    </Badge>
                                )}
                            </div>
                            <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </CardHeader>

                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                                    <ul className="space-y-1">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t">
                                    <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </span>
                                    </div>

                                    <Button className="w-full group">
                                        Get Started
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}