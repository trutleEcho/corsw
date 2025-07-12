'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const metrics = [
    { value: 150, suffix: '+', label: 'Projects Completed', color: 'from-blue-600 to-blue-700' },
    { value: 98, suffix: '%', label: 'Client Satisfaction', color: 'from-emerald-600 to-emerald-700' },
    { value: 250, suffix: '%', label: 'Average ROI', color: 'from-purple-600 to-purple-700' },
    { value: 24, suffix: '/7', label: 'Support Available', color: 'from-orange-600 to-orange-700' },
];

function AnimatedCounter({
                             value,
                             suffix,
                             duration = 2
                         }: {
    value: number;
    suffix: string;
    duration?: number;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const startTime = Date.now();
            const endTime = startTime + duration * 1000;

            const timer = setInterval(() => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / (endTime - startTime), 1);

                setCount(Math.floor(progress * value));

                if (progress === 1) {
                    clearInterval(timer);
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
      {count}
            {suffix}
    </span>
    );
}

export function SuccessMetrics() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
                <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                            <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                            </div>
                            <p className="text-sm text-gray-600">{metric.label}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}