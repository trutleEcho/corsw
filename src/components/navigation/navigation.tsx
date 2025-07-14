'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSelector } from '@/components/ui/language-selector';
import { useTranslation } from 'react-i18next';
import Image from "next/image";

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useTranslation();

    const navItems = [
        { label: t('nav.home'), href: '#home' },
        { label: t('nav.services'), href: '#services' },
        { label: t('nav.pricing'), href: '#pricing' },
        { label: t('nav.about'), href: '#about' },
        { label: t('nav.contact'), href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pt-2 ${
                    isScrolled
                        ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm shadow-lg dark:shadow-gray-900/20'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl font-bold transition-colors duration-300 flex flex-row items-center gap-4"
                        >
                            {/* 64x64 Logos */}
                            <Image
                                src="/CORSW_BG_LIGHT_64x64.png"
                                alt="Logo"
                                width={64}
                                height={64}
                                className="hidden md:block dark:hidden"
                            />
                            <Image
                                src="/CORSW_BG_DARK_64x64.png"
                                alt="Logo"
                                width={64}
                                height={64}
                                className="hidden dark:md:block"
                            />

                            {/* 32x32 Logos */}
                            <Image
                                src="/CORSW_BG_LIGHT_32x32.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="block md:hidden dark:hidden"
                            />
                            <Image
                                src="/CORSW_BG_DARK_32x32.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="hidden dark:block dark:md:hidden"
                            />

                            Corner Softwares
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.label}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    onClick={() => handleNavClick(item.href)}
                                    className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-300 relative group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                                </motion.button>
                            ))}

                            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
                                <ThemeToggle />
                                <LanguageSelector />
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="md:hidden"
                        >
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-30 bg-black/20 dark:bg-black/60 backdrop-blur-sm md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-40 md:hidden border-l border-gray-200 dark:border-gray-700"
                    >
                        <div className="p-6 pt-20">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">Menu</h3>
                                <div className="flex items-center space-x-2">
                                    <ThemeToggle />
                                    <LanguageSelector />
                                </div>
                            </div>

                            <div className="space-y-8">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.label}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                        onClick={() => handleNavClick(item.href)}
                                        className="block w-full text-left text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}