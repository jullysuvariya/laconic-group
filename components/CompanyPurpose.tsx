import { motion } from 'framer-motion';
import { RevelImage } from "./RevealImage";
import { RevelDivHorizontal } from "./revealDivHorizontal";
import Card from './Card';

const purposes = [
    {
        "icon": "vision_icon.svg",
        "title": "Our Vision",
        "description": "To satisfy our customers with great and value proposition driven by continuous improvements " +
            "in creativity, innovation, efficiency, and customer service. To constantly upgrade our technology and conduct " +
            "research and development to innovate different designs."
    },
    {
        "icon": "mision_icon.svg",
        "title": "Our Mission",
        "description": "To design and manufacture the product from our manufacturing unit to become the market " +
            "and brand leader in the various sectors. To continue to provide unrivaled service and exceptional value " +
            "for money to our growing customer base."
    },
    {
        "icon": "value.svg",
        "title": "Our Values",
        "description": "Laconic Group stands for impeccable quality. Our products undergo rigorous quality assurance "+
        "processes to ensure durability and aesthetic appeal. Embracing creativity, we continuously explore new designs "+
        "and patterns to stay ahead in the dynamic world."
    }
]

const CompanyPurpose = () => {
    return (
        <div className="px-16 lg:px-32 justify-center my-16 mb-28 lg:my-24 flex flex-col gap-4">
            <RevelDivHorizontal className="flex flex-col items-center gap-4">
                <h6 className="self-center text-base lg:text-3xl font-light">Our</h6>
                <h1 className="text-3xl lg:text-6xl self-center mb-8 lg:mb-16 text-center border-b-4 border-primary pb-4 lg:pb-8 px-10">
                    Core Principles
                </h1>
            </RevelDivHorizontal>


            <ul
                role="list"
                className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-14 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
            >
                {purposes.map((purpose) => {
                    return <Card title={purpose.title} description={purpose.description} key={purpose.title}
                        icon={purpose.icon} borderColor='primary'/>
                })}
            </ul>
        </div>
    )
}

export default CompanyPurpose