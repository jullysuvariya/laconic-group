import React from 'react'
import { motion } from 'framer-motion';

export const RevelImgHorizontal = ({ src, className, reverseDirection }: { src: string, className?: string, reverseDirection?: boolean }) => {

    const variantsLeftToRight = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };
    const variantsRightToLeft = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };

    var variants = variantsLeftToRight;
    if (reverseDirection) {
        variants = variantsRightToLeft;
    }

    return (
        <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 1, delay: 0.5 }}
            className={className}
            src={src}
        >
        </motion.img>
    )
}