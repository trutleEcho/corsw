'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useTranslation } from 'react-i18next';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const { t } = useTranslation();

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: t('contact.info.email'),
            href: `mailto:${t('contact.info.email')}`
        },
        {
            icon: Phone,
            label: t('contact.form.phone', 'Phone'),
            value: t('contact.info.phone'),
            href: `tel:${t('contact.info.phone').replace(/\s/g, '')}`
        },
        {
            icon: MapPin,
            label: 'Location',
            value: t('contact.info.location'),
            href: null
        }
    ];

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = t('contact.form.required');
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = t('contact.form.required');
        }
        if (!formData.email.trim()) {
            newErrors.email = t('contact.form.required');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('contact.form.invalidEmail');
        }
        if (!formData.subject.trim()) {
            newErrors.subject = t('contact.form.required');
        }
        if (!formData.message.trim()) {
            newErrors.message = t('contact.form.required');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Reset form on success
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
            });

            // Show success message (you can implement toast notification here)
            console.log('Form submitted successfully');
        } catch (error) {
            console.error('Form submission error:', error);
        }

        setIsSubmitting(false);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    return (
        <section id="contact" className="py-32 bg-gray-50 dark:bg-gray-900" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
                        {t('contact.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                                {t('contact.info.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                {t('contact.info.description')}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    className="flex items-center space-x-4"
                                >
                                    <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                                        <info.icon className="w-5 h-5 text-white dark:text-black" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.label}</div>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-black dark:text-white font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <div className="text-black dark:text-white font-medium">{info.value}</div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-black dark:text-white">
                                    {t('contact.form.title')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="firstName" className="text-black dark:text-white font-medium">
                                                {t('contact.form.firstName')}
                                            </Label>
                                            <Input
                                                id="firstName"
                                                value={formData.firstName}
                                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                required
                                                className={`border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-700 ${
                                                    errors.firstName ? 'border-red-500' : ''
                                                }`}
                                            />
                                            {errors.firstName && (
                                                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                                            )}
                                        </div>
                                        <div>
                                            <Label htmlFor="lastName" className="text-black dark:text-white font-medium">
                                                {t('contact.form.lastName')}
                                            </Label>
                                            <Input
                                                id="lastName"
                                                value={formData.lastName}
                                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                                required
                                                className={`border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-700 ${
                                                    errors.lastName ? 'border-red-500' : ''
                                                }`}
                                            />
                                            {errors.lastName && (
                                                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="email" className="text-black dark:text-white font-medium">
                                            {t('contact.form.email')}
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            required
                                            className={`border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-700 ${
                                                errors.email ? 'border-red-500' : ''
                                            }`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="subject" className="text-black dark:text-white font-medium">
                                            {t('contact.form.subject')}
                                        </Label>
                                        <Input
                                            id="subject"
                                            value={formData.subject}
                                            onChange={(e) => handleInputChange('subject', e.target.value)}
                                            required
                                            className={`border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-700 ${
                                                errors.subject ? 'border-red-500' : ''
                                            }`}
                                        />
                                        {errors.subject && (
                                            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="message" className="text-black dark:text-white font-medium">
                                            {t('contact.form.message')}
                                        </Label>
                                        <Textarea
                                            id="message"
                                            placeholder={t('contact.form.messagePlaceholder')}
                                            value={formData.message}
                                            onChange={(e) => handleInputChange('message', e.target.value)}
                                            rows={4}
                                            required
                                            className={`border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white focus:ring-black dark:focus:ring-white resize-none bg-white dark:bg-gray-700 ${
                                                errors.message ? 'border-red-500' : ''
                                            }`}
                                        />
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 group"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <LoadingSpinner size="sm" className="mr-2" />
                                        ) : (
                                            <>
                                                {t('contact.form.send')}
                                                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}