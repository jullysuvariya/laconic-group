import { tap } from "node:test/reporters";
import { RevelImage } from "./RevealImage";
import { RevelTextHorizontal } from "./revelTextHorizonal"
import { motion } from 'framer-motion';

const Card = ({ title, description, icon }: { title: string, description: string, icon: string }) => {
    const childMotion = {
        tap:{
            scale: 1.05,
            y: -10,
        },
        hover: {
            scale: 1.05,
            y: -10,
        }
    };

    return (
        <motion.div
            key={title}
            whileHover="hover"
            className="group flex items-center flex-col rounded-2xl border-primary border px-8 lg:px-20 py-10"
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

const purposes = [
    {
        "icon": "vision_icon.svg",
        "title": "Our Vision",
        "description": "To be the world's no. 1 Provider of innovative solutions in consumer electrical products"
    },
    {
        "icon": "mision_icon.svg",
        "title": "Our Mission",
        "description": "To persistently work to achieve our vision by transforming our self into a rapidly growing," +
            " high performing and exponential organization which will continue to develop and improve process and" +
            " products to ensure innovative products with higher value and quality at a competitive price."
    },
    {
        "icon": "value.svg",
        "title": "Our Values",
        "description": "Integrity\n" +
            "Team Work\n" +
            "Performance\n" +
            "Entrepreneurial Spirit\n" +
            "Customer-Centric"
    }
]

const CompanyPurpose = () => {
    return (
        <div className="px-16 lg:px-32 lg:h-screen justify-center my-16 lg:my-32 flex flex-col gap-4">
            <RevelTextHorizontal className="flex flex-col items-center gap-4">
                <h6 className="self-center text-base lg:text-3xl font-light">Our</h6>
                <h1 className="text-2xl lg:text-6xl self-center mb-8 lg:mb-16 text-center border-b-4 border-primary pb-4 lg:pb-8 px-10">
                    Core Principles
                </h1>
            </RevelTextHorizontal>


            <ul
                role="list"
                className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-14 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
            >
                {purposes.map((purpose) => {
                    return <Card title={purpose.title} description={purpose.description} key={purpose.title}
                        icon={purpose.icon} />
                })}
            </ul>
        </div>
    )
}

export default CompanyPurpose