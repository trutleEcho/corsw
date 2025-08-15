import PriceCalculator from "@/components/pricing/enhanced-calculator";

export default function PricingPage(){
    return(
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
            <PriceCalculator/>
        </main>
    )
}