import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';

export const RevelImage = ({ src, className }: { src: string , className: string }) => {

    const variants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <motion.img
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{
                duration: 0.3,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 3,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }}
            src={src}
            className={className}
        />
    )
}