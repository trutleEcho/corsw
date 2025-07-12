'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import {
    Code,
    Palette,
    Globe,
    Smartphone,
    BarChart3,
    Shield,
    ArrowRight
} from 'lucide-react';

export function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { t } = useTranslation();

    const services = [
        {
            icon: Code,
            title: t('services.customDev.title'),
            description: t('services.customDev.description'),
            features: t('services.customDev.features', { returnObjects: true }) as string[]
        },
        {
            icon: Palette,
            title: t('services.designSystems.title'),
            description: t('services.designSystems.description'),
            features: t('services.designSystems.features', { returnObjects: true }) as string[]
        },
        {
            icon: Globe,
            title: t('services.webSolutions.title'),
            description: t('services.webSolutions.description'),
            features: t('services.webSolutions.features', { returnObjects: true }) as string[]
        },
        {
            icon: Smartphone,
            title: t('services.mobileApps.title'),
            description: t('services.mobileApps.description'),
            features: t('services.mobileApps.features', { returnObjects: true }) as string[]
        },
        {
            icon: BarChart3,
            title: t('services.analytics.title'),
            description: t('services.analytics.description'),
            features: t('services.analytics.features', { returnObjects: true }) as string[]
        },
        {
            icon: Shield,
            title: t('services.security.title'),
            description: t('services.security.description'),
            features: t('services.security.features', { returnObjects: true }) as string[]
        }
    ];

    return (
        <section id="services" className="py-32 bg-gray-50 dark:bg-gray-900" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
                        {t('services.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        {t('services.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                                <CardContent className="p-8">
                                    <motion.div
                                        className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <service.icon className="w-6 h-6 text-white dark:text-black" />
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="space-y-2 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <div className="w-1 h-1 bg-black dark:bg-white rounded-full mr-3"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        variant="outline"
                                        className="w-full border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 group"
                                    >
                                        {t('services.learnMore')}
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}