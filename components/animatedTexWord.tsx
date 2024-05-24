import React from "react";
import { motion } from "framer-motion";

export const AnimatedTextWord = ({ text, className }: { text: string, className: string }) => {
    const words = text.split(" ");

    // Variants for Container of words.
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.5 * i },
        }),
    };

    // Variants for each word.

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                delay: 0.3,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            // style={{ display: "flex" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className={className}
                >
                    {word}{index != words.length - 1 && '\u00A0'}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextWord;
