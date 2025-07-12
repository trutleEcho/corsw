'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Calculator, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function EnhancedCalculator() {
    const { t } = useTranslation();
    const [projectComplexity, setProjectComplexity] = useState([50]);
    const [timeline, setTimeline] = useState([3]);
    const [includeDesign, setIncludeDesign] = useState(true);
    const [includeMaintenance, setIncludeMaintenance] = useState(false);
    const [isCalculating, setIsCalculating] = useState(false);

    const basePrice = 10000;
    const complexityMultiplier = projectComplexity[0] / 50;
    const timelineMultiplier = Math.max(0.7, 1 - (timeline[0] - 8) / 40);
    const designPrice = includeDesign ? 5000 : 0;
    const maintenancePrice = includeMaintenance ? 2000 : 0;

    const totalPrice = Math.round(
        (basePrice * complexityMultiplier * timelineMultiplier) +
        designPrice +
        maintenancePrice
    );

    const getComplexityLabel = (value: number) => {
        if (value < 30) return t('calculator.complexityLevels.simple');
        if (value < 70) return t('calculator.complexityLevels.medium');
        return t('calculator.complexityLevels.complex');
    };

    const handleGetQuote = async () => {
        setIsCalculating(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsCalculating(false);
        // Handle quote request
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <Card className="max-w-4xl mx-auto bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center text-2xl text-black dark:text-white">
                        <Calculator className="mr-2 h-6 w-6" />
                        {t('calculator.title')}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400">
                        {t('calculator.subtitle')}
                    </p>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Calculator Controls */}
                        <div className="space-y-6">
                            <div>
                                <Label className="text-base font-semibold mb-3 block text-black dark:text-white">
                                    {t('calculator.complexity')}: {getComplexityLabel(projectComplexity[0])}
                                </Label>
                                <Slider
                                    value={projectComplexity}
                                    onValueChange={setProjectComplexity}
                                    max={100}
                                    min={10}
                                    step={10}
                                    className="mb-2"
                                />
                                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                    <span>{t('calculator.complexityLevels.simple')}</span>
                                    <span>{t('calculator.complexityLevels.complex')}</span>
                                </div>
                            </div>

                            <div>
                                <Label className="text-base font-semibold mb-3 block text-black dark:text-white">
                                    {t('calculator.timeline')}: {timeline[0]} {t('calculator.weeks')}
                                </Label>
                                <Slider
                                    value={timeline}
                                    onValueChange={setTimeline}
                                    max={12}
                                    min={1}
                                    step={1}
                                    className="mb-2"
                                />
                                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                    <span>1 {t('calculator.weeks')}</span>
                                    <span>12 {t('calculator.weeks')}</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="design" className="text-base font-semibold text-black dark:text-white">
                                        {t('calculator.includeDesign')}
                                    </Label>
                                    <Switch
                                        id="design"
                                        checked={includeDesign}
                                        onCheckedChange={setIncludeDesign}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <Label htmlFor="maintenance" className="text-base font-semibold text-black dark:text-white">
                                        {t('calculator.includeMaintenance')}
                                    </Label>
                                    <Switch
                                        id="maintenance"
                                        checked={includeMaintenance}
                                        onCheckedChange={setIncludeMaintenance}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Price Breakdown */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
                                {t('calculator.breakdown')}
                            </h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                                    <span>{t('calculator.baseDevelopment')}</span>
                                    <span>₹{Math.round(basePrice * complexityMultiplier * timelineMultiplier).toLocaleString()}</span>
                                </div>

                                {includeDesign && (
                                    <div className="flex justify-between text-gray-700 dark:text-gray-300">
                                        <span>{t('calculator.design')}</span>
                                        <span>₹{designPrice.toLocaleString()}</span>
                                    </div>
                                )}

                                {includeMaintenance && (
                                    <div className="flex justify-between text-gray-700 dark:text-gray-300">
                                        <span>{t('calculator.maintenance')}</span>
                                        <span>₹{maintenancePrice.toLocaleString()}</span>
                                    </div>
                                )}

                                <hr className="my-3 border-gray-300 dark:border-gray-500" />

                                <div className="flex justify-between items-center text-xl font-bold">
                                    <span className="text-black dark:text-white">{t('calculator.total')}</span>
                                    <motion.span
                                        key={totalPrice}
                                        initial={{ scale: 1.2 }}
                                        animate={{ scale: 1 }}
                                        className="text-blue-600 dark:text-blue-400"
                                    >
                                        ₹{totalPrice.toLocaleString()}
                                    </motion.span>
                                </div>
                            </div>

                            <Button
                                onClick={handleGetQuote}
                                disabled={isCalculating}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                            >
                                {isCalculating ? (
                                    <LoadingSpinner size="sm" className="mr-2" />
                                ) : (
                                    <Zap className="mr-2 h-4 w-4" />
                                )}
                                {t('calculator.getQuote')}
                            </Button>

                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
                                {t('calculator.disclaimer')}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}