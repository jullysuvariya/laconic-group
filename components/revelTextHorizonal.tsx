import React, { ReactChild, ReactChildren, ReactElement, ReactNode } from 'react'
import { motion } from 'framer-motion';

export const RevelTextHorizontal = ({ children, className }: { children: ReactElement | ReactElement[] | string, className?: string }) => {

    const variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 1, delay: 0.5 }}
            className={className}
        >
            {children}
        </motion.h1>
    )
}