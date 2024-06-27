import { motion } from "framer-motion";
import { ReactNode } from "react";

export const RevelGrid = ({ children, className }: { children: ReactNode, className: string }) => {

    const variants = {
        hidden: {
            opacity: 0,
            translateX: -50,
            translateY: -50,
        },
        visible: {
            opacity: 1,
            translateX: 0,
            translateY: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.3,
                delay: 0.5,
            }
        }
    }
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.3, delay: 1 }}
        >
            {children}
        </motion.div>
    )
}