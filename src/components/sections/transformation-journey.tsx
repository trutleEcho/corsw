'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TransformationStep } from '@/components/transformation/transformation-step';
import { transformationSteps } from '@/data/transformation-data';
import { Card } from '@/components/ui/card';

export function TransformationJourney() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.2"] // more mobile friendly scroll range
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    return (
        <Card
            id="transformation"
            ref={containerRef}
            className="py-20 px-4 sm:px-8 md:px-12 bg-transparent -z-10"
        >
            <motion.div
                style={{ opacity }}
                className="max-w-6xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-center mb-16 px-2"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Your Digital Transformation
                        <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Journey
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Follow our proven methodology that has helped hundreds of businesses achieve digital excellence.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-300 dark:bg-gray-700 hidden sm:block" />

                    {/* Timeline steps */}
                    <div className="space-y-8 md:space-y-16">
                        {transformationSteps.map((step, index) => (
                            <TransformationStep
                                key={step.id}
                                step={step}
                                index={index}
                                isReversed={index % 2 === 1}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </Card>
    );
}
