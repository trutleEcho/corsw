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
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <Card id="transformation" className="py-20 mx-8 bg-transparent" ref={containerRef}>
            <motion.div
                style={{ opacity }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Your Digital Transformation
                        <span className="block bg-clip-text text-transparent">
                            Journey
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Follow our proven methodology that has helped hundreds of businesses achieve digital excellence
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gray-300" />
                    <div className="space-y-16">
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