'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
        offset: ['start end', 'end start']
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className={`flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center ${
                isReversed ? 'lg:grid-flow-col-dense' : ''
            }`}
        >
            {/* Content Block */}
            <motion.div
                initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className={isReversed ? 'lg:col-start-2' : ''}
            >
                <Badge variant="outline" className="mb-4 text-sm">
                    Step {index + 1}
                </Badge>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                </h3>

                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {step.description}
                </p>

                <div className="space-y-3 mb-8">
                    {step.features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3"
                        >
                            <div className="w-2 h-2 bg-primary/40 rounded-full" />
                            <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.div>
                    ))}
                </div>

                {/*<Button>*/}
                {/*    Learn More*/}
                {/*    <ArrowRight className="ml-2 h-4 w-4" />*/}
                {/*</Button>*/}
            </motion.div>

            {/* Interactive Card */}
            <motion.div
                // style={{ x: index % 2 === 0 ? x : undefined }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className={isReversed ? 'lg:col-start-1' : ''}
            >
                <Card className="p-6 sm:p-8 shadow-xl hover:shadow-2xl bg-primary/20 transition-shadow duration-300">
                    <CardContent className="p-0">
                        <div className="text-center">
                            <motion.div
                                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-white shadow-lg"
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                            </motion.div>

                            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {step.interactiveTitle}
                            </h4>

                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                                {step.interactiveDescription}
                            </p>

                            {step.metrics && (
                                <div className="grid grid-cols-2 gap-4">
                                    {step.metrics.map((metric, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="text-center"
                                        >
                                            <div className="text-xl font-bold text-gray-900 dark:text-white">
                                                {metric.value}
                                            </div>
                                            <div className="text-xs sm:text-sm text-gray-500">
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
