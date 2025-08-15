'use client';

import {HeroSection} from '@/components/sections/hero-section';
import {GeometricShapes} from '@/components/ui/geometric-shapes';
import {TransformationJourney} from "@/components/sections/transformation-journey";
import PriceCalculator from "@/components/pricing/enhanced-calculator";
import GlassHeroSection from "@/components/sections/glass-hero-section";
import VerticalProcessFlow from "@/components/sections/vertical-process-flow";

export default function HomePage() {
    return (
        <main
            className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background Geometric Shapes for entire page */}
            <GeometricShapes/>

            <HeroSection/>
            <GlassHeroSection/>
            <TransformationJourney/>
            <VerticalProcessFlow/>
            <PriceCalculator/>
        </main>
    );
}