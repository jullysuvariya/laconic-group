import React from 'react'
import { motion } from 'framer-motion';

export const RevelImgVertical = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 1, delay: 0.5 }}
            className={className}
            src={src}
            alt={alt}
        >
        </motion.img>
    )
}