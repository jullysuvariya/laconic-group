import { motion } from "framer-motion";
import { RevelImage } from "./RevealImage";

const Card = ({ title, description, icon, borderColor }: { title: string, description: string, icon: string, borderColor: string }) => {
    const childMotion = {
        hover: {
            scale: 1.05,
            y: -10,
        }
    };

    return (
        <motion.div
            key={title}
            whileHover="hover"
            className={`group flex items-center flex-col rounded-2xl border-${borderColor} border px-8 lg:px-20 py-10`}
            variants={childMotion}
        >
            <li key={title} className="">
                <RevelImage src={icon} className={"mx-auto h-20 w-20 lg:h-20 lg:w-20 -mt-20 rounded-full"}>
                </RevelImage>
                <h3 className="my-6 text-center font-semibold leading-7 text-2xl tracking-tight">{title}</h3>
                {description.split("\n").map((line, index) => {
                    return (
                        <p key={index} className="text-sm leading-6 text-center group-hover:text-black text-gray-400">{line}</p>
                    )
                })}
            </li>
        </motion.div>
    )
}

export default Card
