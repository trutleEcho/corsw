'use client';

import { motion } from 'framer-motion';
import { TestimonialCarousel } from '@/components/testimonials/testimonial-carousel';
import { SuccessMetrics } from '@/components/metrics/success-metrics';

export function ClientSuccessStories() {
    return (
        <section id="success" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Client Success
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stories
            </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover how we&apos;ve helped businesses across industries achieve remarkable digital transformation results
                    </p>
                </motion.div>

                <SuccessMetrics />
                <TestimonialCarousel />
            </div>
        </section>
    );
}