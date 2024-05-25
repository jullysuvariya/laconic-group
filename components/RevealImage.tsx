import React from 'react'
import { motion } from 'framer-motion';

export const RevelImage = ({ src, className }: { src: string, className: string }) => {

    const variants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition=
            {{
                duration: 0.4,
                delay: 0.5,
            }}
            src={src}
            className={className}
        />
    )
}