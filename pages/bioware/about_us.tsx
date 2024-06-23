import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { RevelDivHorizontal } from "@/components/revealDivHorizontal";
import { RevelTextVertical } from "@/components/revelTextVertical";
import { RevelTextHorizontal } from "@/components/revelTextHorizonal";
import Card from "@/components/Card";

const purposes = [
    {
        "icon": "/vision_icon.svg",
        "title": "Our Vision",
        "description": "To satisfy our customers with great and value proposition driven by continuous improvements " +
            "in creativity, innovation, efficiency, and customer service. To constantly upgrade our technology and conduct " +
            "research and development to innovate different designs."
    },
    {
        "icon": "/mision_icon.svg",
        "title": "Our Mission",
        "description": "To design and manufacture the product from our manufacturing unit to become the market " +
            "and brand leader in the various sectors. To continue to provide unrivaled service and exceptional value " +
            "for money to our growing customer base."
    },
    {
        "icon": "/value.svg",
        "title": "Our Values",
        "description": "Laconic Group stands for impeccable quality. Our products undergo rigorous quality assurance " +
            "processes to ensure durability and aesthetic appeal. Embracing creativity, we continuously explore new designs " +
            "and patterns to stay ahead in the dynamic world."
    }
]

const BiowareAbout = () => {

    const ref = useRef(null);
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            animate(count, 30, {
                duration: 3
            });
        }
    }, [isInView, count])

    return (
        <div className="flex flex-col justify-between">
            <div className="relative flex items-center justify-center bg-fixed h-96 bg-parallax bg-cover lg:mt-24 opacity-70">
                <div className="w-full h-full bg-black bg-opacity-50" />
                <RevelTextVertical className="absolute z-20 text-5xl lg:text-7xl text-white font-extrabold">
                    ABOUT US
                </RevelTextVertical>
            </div>

            <div className="flex flex-col px-16 py-10 lg:px-64 justify-center text-center lg:text-lg gap-8 lg:mt-20">
                <RevelTextHorizontal className="max-lg:mt-10 flex flex-col items-center text-3xl lg:text-6xl self-center text-center px-10 border-b-4 border-primary mb-6 lg:mb-16 pb-4 lg:pb-8">
                    Legacy of Excellence
                </RevelTextHorizontal>
                {/* <div className="border-b-4 border-primary mb-8 lg:mb-16"></div> */}
                <RevelTextVertical>
                    <h1 className="text-xl lg:text-2xl self-center text-center">
                        <strong>
                            <motion.span ref={ref} className="text-4xl">{rounded}</motion.span><span className="text-2xl lg:text-3xl self-baseline">+</span>&nbsp; Years of Unrivaled Excellence and Unmatched Quality!
                        </strong>
                    </h1>
                </RevelTextVertical>
                <RevelTextVertical>
                    <p>
                        As a distinguished member of the <strong>Laconic Bioware</strong>, we have been at the forefront of innovation
                        and quality <strong>since 1989</strong>. Our extensive product range encompasses ceramic and porcelain
                        tiles, SPC vinyl flooring, sanitaryware and bathware, paper and paperboards, biowares and bagasse
                        products, PP fabric and PP bags, along with industrial machinery and equipment including air
                        compressors, grinders, pressure pumps, blowers, switch boards, and more. <strong>The Laconic
                            Bioware</strong> has now expanded into the international market, delivering premier products
                        and outstanding services worldwide.

                        {/* The core area business of <strong>Laconic Inc</strong> is one of the part of the <strong>Laconic Group of
                        Companies</strong> which develop and provide high-quality products such as Ceramic & Porcelain Tiles,
                    SPC Vinyl Flooring, Sanitaryware & Bathware, Paper & Paperboards, Biowares & Bagasse Products,
                    PP Fabric & PP Bags, Industrial Machinery & Equipments like Air Compressor, Grinders, Pressure Pump,
                    Blower, Switch Boards and Many More <strong>since 1989</strong>. Now our company is separately working
                    in the international market & export to deliver the best products with our add-on services, mainly
                    manufactured products of our group. */}
                    </p>
                </RevelTextVertical>
                <RevelTextVertical>
                    <p>
                        <strong>
                            <i>
                                “Our World Class Production units are equipped with cutting edge Modern Technology to Match
                                Global Standards”
                            </i>
                        </strong>
                    </p>
                </RevelTextVertical>
                <RevelTextVertical>
                    <p>
                        Our dedicated team is committed to providing timely and precise services to our valued
                        clients, ensuring satisfaction and excellence in every project. Trust us for all your needs
                        and experience unparalleled quality and service.

                        {/* The team at our firm are the best in their own way and it’s our word of honor that we provide timely and
                    precise service to our esteemed clients. */}
                    </p>
                </RevelTextVertical>
            </div>

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
                            icon={purpose.icon} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default BiowareAbout