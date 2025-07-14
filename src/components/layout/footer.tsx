'use client';

import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'react-i18next';
import Image from "next/image";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center justify-center gap-2">

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
                        <span className="hidden md:inline dark:hidden">Corner Softwares</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                        {t('footer.description')}
                    </p>

                    <Separator className="mb-8 bg-gray-200 dark:bg-gray-700" />

                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                        <div className="mb-4 md:mb-0">
                            © 2025 Corner Softwares. {t('footer.rights')}
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-300">
                                {t('footer.privacy')}
                            </a>
                            <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-300">
                                {t('footer.terms')}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}