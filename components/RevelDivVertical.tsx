import React, { ReactElement } from 'react'
import { motion } from 'framer-motion';

export const RevelDivVertical = ({ children, className }: { children: ReactElement | ReactElement[] | string, className?: string }) => {

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 1, delay: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}