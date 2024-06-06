import { useEffect, useRef } from "react";
import { RevelTextHorizontal } from "./revelTextHorizonal"
import { RevelTextVertical } from "./revelTextVertical"
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const AboutUs = () => {

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
        <div id="about" className="flex flex-col lg:h-screen px-16 py-10 lg:px-64 justify-center text-center lg:text-lg gap-8 lg:mt-20">
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
                    As a distinguished member of the <strong>Laconic Group of Companies</strong>, we have been at the forefront of innovation
                    and quality <strong>since 1989</strong>. Our extensive product range encompasses ceramic and porcelain
                    tiles, SPC vinyl flooring, sanitaryware and bathware, paper and paperboards, biowares and bagasse
                    products, PP fabric and PP bags, along with industrial machinery and equipment including air
                    compressors, grinders, pressure pumps, blowers, switch boards, and more. <strong>The Laconic Group of
                        Companies</strong> has now expanded into the international market, delivering premier products 
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
    )
}

export default AboutUs