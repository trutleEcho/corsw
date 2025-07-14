'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {GeometricShapes} from "@/components/ui/geometric-shapes";

export function HeroSection() {
    const { t } = useTranslation();

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 y-10">
            <GeometricShapes />
            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight transition-colors duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {t('hero.title')}
                        <br />
                        <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{t('hero.subtitle')}</span>
                        <br />
                        {t('hero.tagline')}
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {t('hero.description')}
                    </motion.p>
                </motion.div>

                {/* Scroll Indicator - Fixed Position */}
                <motion.div
                    className="absolute -bottom-18 md:-bottom-13 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 border-2 border-black dark:border-white rounded-full flex justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-3 bg-black dark:bg-white rounded-full mt-2"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}