'use client';

import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {useTranslation} from 'react-i18next';

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-100px"});
    const {t} = useTranslation();

    const stats = [
        {value: '150+', label: t('about.stats.projects')},
        {value: '98%', label: t('about.stats.satisfaction')},
        {value: '5+', label: t('about.stats.experience')},
        {value: '24/7', label: t('about.stats.support')}
    ];

    const principles = [
        {
            title: t('about.principles.minimalism.title'),
            description: t('about.principles.minimalism.description')
        },
        {
            title: t('about.principles.performance.title'),
            description: t('about.principles.performance.description')
        },
        {
            title: t('about.principles.quality.title'),
            description: t('about.principles.quality.description')
        }
    ];

    return (
        <section id="about" className="py-32 bg-white dark:bg-gray-900" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8}}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
                        {t('about.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {t('about.description')}
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{opacity: 0, scale: 0.9}}
                            animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.9}}
                            transition={{duration: 0.6, delay: 0.3 + index * 0.1}}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600">
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                        ))}
                </motion.div>

                {/* Principles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {principles.map((principle, index) => (
                        <motion.div
                            key={principle.title}
                            initial={{opacity: 0, y: 50}}
                            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                            transition={{duration: 0.6, delay: 0.4 + index * 0.1}}
                            whileHover={{y: -5}}
                        >
                            <Card
                                className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-gray-50 dark:bg-gray-800">
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                                        {principle.title}
                                    </h3>
                                    <span className="text-gray-600 leading-relaxed">
                                        <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {principle.description}
                                        </span>
                                    </span>
                                </CardContent>
                            </Card>
                        </motion.div>
                        ))}
                </div>
            </div>
        </section>
);
}