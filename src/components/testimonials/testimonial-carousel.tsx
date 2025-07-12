'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'CEO, TechStartup Inc.',
        company: 'Technology',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        content: 'Corner Softwares transformed our entire business model. Their strategic approach and technical expertise delivered results beyond our expectations.',
        rating: 5,
        results: ['300% revenue increase', '50% cost reduction', '24/7 system uptime']
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'CTO, RetailMax',
        company: 'E-commerce',
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        content: 'The digital transformation journey with Corner Softwares was seamless. They understood our challenges and delivered solutions that scale.',
        rating: 5,
        results: ['150% traffic growth', '75% faster loading', '90% mobile optimization']
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'Marketing Director, HealthPlus',
        company: 'Healthcare',
        image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
        content: 'Their comprehensive approach to digital marketing and brand identity helped us reach new audiences and build lasting relationships.',
        rating: 5,
        results: ['200% lead generation', '85% brand recognition', '40% customer retention']
    }
];

export function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="max-w-4xl mx-auto">
                            <CardContent className="p-8 md:p-12">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                                    {/* Testimonial Content */}
                                    <div className="md:col-span-2">
                                        <div className="flex mb-4">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>

                                        <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                                            &quot;{testimonials[currentIndex].content}&quot;
                                        </blockquote>

                                        <div className="flex items-center mb-6">
                                            <Avatar className="w-12 h-12 mr-4">
                                                <AvatarImage
                                                    src={testimonials[currentIndex].image}
                                                    alt={testimonials[currentIndex].name}
                                                />
                                                <AvatarFallback>
                                                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-semibold text-gray-900">
                                                    {testimonials[currentIndex].name}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    {testimonials[currentIndex].role}
                                                </div>
                                                <div className="text-sm text-blue-600">
                                                    {testimonials[currentIndex].company}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Results */}
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-gray-900 mb-4">Key Results:</h4>
                                        {testimonials[currentIndex].results.map((result, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                className="flex items-center space-x-3"
                                            >
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-sm text-gray-700">{result}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
                <Button variant="outline" size="sm" onClick={prev}>
                    <ChevronLeft className="w-4 h-4" />
                </Button>

                <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>

                <Button variant="outline" size="sm" onClick={next}>
                    <ChevronRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
}