"use client";

import { motion } from 'framer-motion';

interface MotionWrapperProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export function MotionWrapper({ children, delay = 0, className }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
