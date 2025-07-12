'use client';

import { motion } from 'framer-motion';

export function GeometricShapes() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Large Circle */}
            <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 border border-gray-200 dark:border-gray-700 rounded-full"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Second Large Circle */}
            <motion.div
                className="absolute -bottom-40 -left-40 w-96 h-96 border border-gray-300 dark:border-gray-600 rounded-full opacity-50"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
            />

            {/* Rectangle */}
            <motion.div
                className="absolute top-1/4 -left-20 w-40 h-40 border border-gray-200 dark:border-gray-700 rotate-45"
                initial={{ opacity: 0, x: -100, rotate: 0 }}
                animate={{ opacity: 1, x: 0, rotate: 45 }}
                transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Second Rectangle */}
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-gray-300 dark:border-gray-600 rotate-12"
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ opacity: 0.7, scale: 1, rotate: 12 }}
                transition={{ duration: 1.5, delay: 1 }}
            />

            {/* Small Circles */}
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-black dark:bg-white rounded-full"
                animate={{ 
                    y: [-10, 10, -10],
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute top-1/3 left-1/4 w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
                animate={{ 
                    y: [10, -10, 10],
                    x: [0, 5, 0],
                    scale: [1, 1.5, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <motion.div
                className="absolute top-2/3 right-1/3 w-3 h-3 bg-gray-600 dark:bg-gray-300 rounded-full"
                animate={{ 
                    y: [0, -15, 0],
                    x: [0, -8, 0],
                    rotate: [0, 180, 360]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Triangle */}
            <motion.div
                className="absolute bottom-40 left-1/3 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-gray-200 dark:border-b-gray-700"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 180 }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Second Triangle */}
            <motion.div
                className="absolute top-1/2 right-1/4 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-gray-300 dark:border-b-gray-600"
                initial={{ opacity: 0, rotate: 0, scale: 0 }}
                animate={{ opacity: 0.8, rotate: 360, scale: 1 }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            />

            {/* Lines */}
            <motion.div
                className="absolute top-1/2 right-1/3 w-24 h-px bg-gray-300 dark:bg-gray-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
            />

            <motion.div
                className="absolute bottom-1/3 left-1/4 w-32 h-px bg-gray-400 dark:bg-gray-500"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.8 }}
                transition={{ duration: 1.5, delay: 1.5 }}
            />

            {/* Floating Dots */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full"
                animate={{ 
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 2, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-gray-600 dark:bg-gray-300 rounded-full"
                animate={{ 
                    y: [0, 25, 0],
                    x: [0, 10, 0],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            {/* Pulsing Circle */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-6 h-6 border-2 border-gray-300 dark:border-gray-600 rounded-full"
                animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}