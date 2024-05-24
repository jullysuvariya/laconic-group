import React, { ReactNode } from 'react'
import { motion } from 'framer-motion';

export const RevelTextVertical = ({ children, className }: { children: ReactNode, className?: string }) => {

    const variants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className={className}
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.25 }}
        >
            {children}
        </motion.div>
    )
}