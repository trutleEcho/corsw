'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { TransformationStepData } from '@/types/transformation';

interface TransformationStepProps {
    step: TransformationStepData;
    index: number;
    isReversed: boolean;
}

export function TransformationStep({ step, index, isReversed }: TransformationStepProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], isReversed ? [100, -100] : [-100, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                isReversed ? 'lg:grid-flow-col-dense' : ''
            }`}
        >
            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={isReversed ? 'lg:col-start-2' : ''}
            >
                <Badge variant="secondary" className="mb-4 text-sm">
                    Step {index + 1}
                </Badge>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                </h3>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {step.description}
                </p>

                <div className="space-y-4 mb-8">
                    {step.features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3"
                        >
                            <div className="w-2 h-2 dark:bg-white bg-gray-900 rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.div>
                    ))}
                </div>

                <Button>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </motion.div>

            {/* Interactive Component */}
            <motion.div
                style={{ x: index % 2 === 0 ? x : undefined }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={isReversed ? 'lg:col-start-1' : ''}
            >
                <Card className="p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardContent className="p-0">
                        <div className="text-center">
                            <motion.div
                                className="w-24 h-24 mx-auto mb-6 text-white dark:text-gray-900 dark:bg-white bg-gray-900  rounded-full flex items-center justify-center"
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <step.icon className="w-12 h-12 text-white dark:text-gray-900" />
                            </motion.div>

                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {step.interactiveTitle}
                            </h4>

                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                {step.interactiveDescription}
                            </p>

                            {step.metrics && (
                                <div className="grid grid-cols-2 gap-4">
                                    {step.metrics.map((metric, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="text-center"
                                        >
                                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                                {metric.value}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {metric.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    );
}