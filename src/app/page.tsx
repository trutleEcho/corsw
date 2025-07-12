'use client';

import {Navigation} from '@/components/navigation/navigation';
import {HeroSection} from '@/components/sections/hero-section';
import {ServicesSection} from '@/components/sections/services-section';
import {AboutSection} from '@/components/sections/about-section';
import {ContactSection} from '@/components/sections/contact-section';
import {EnhancedCalculator} from '@/components/pricing/enhanced-calculator';
import {Footer} from '@/components/layout/footer';
import {GeometricShapes} from '@/components/ui/geometric-shapes';
import {TransformationJourney} from "@/components/sections/transformation-journey";

export default function HomePage() {
    return (
        <main
            className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background Geometric Shapes for entire page */}
            <GeometricShapes/>

            <Navigation/>
            <HeroSection/>
            <TransformationJourney/>
            <ServicesSection/>
            <section className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <EnhancedCalculator/>
                </div>
            </section>
            <AboutSection/>
            <ContactSection/>
            <Footer/>
        </main>
    );
}