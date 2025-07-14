'use client';

import {Navigation} from '@/components/navigation/navigation';
import {HeroSection} from '@/components/sections/hero-section';
import {AboutSection} from '@/components/sections/about-section';
import {Footer} from '@/components/layout/footer';
import {GeometricShapes} from '@/components/ui/geometric-shapes';
import {TransformationJourney} from "@/components/sections/transformation-journey";
import PriceCalculator from "@/components/pricing/enhanced-calculator";
import GlassHeroSection from "@/components/sections/glass-hero-section";
import GlassFeaturesSection from "@/components/sections/glass-features-section";
import VerticalProcessFlow from "@/components/sections/vertical-process-flow";
import {SimpleCenteredContactForm} from "@/components/sections/simple-centered-contact-form";

export default function HomePage() {
    return (
        <main
            className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background Geometric Shapes for entire page */}
            <GeometricShapes/>

            <Navigation/>
            <HeroSection/>
            <GlassHeroSection/>
            <TransformationJourney/>
            <GlassFeaturesSection/>
            <VerticalProcessFlow/>
            <PriceCalculator/>
            <AboutSection/>
            <SimpleCenteredContactForm/>
            <Footer/>
        </main>
    );
}