import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { MdAddIcCall, MdEmail, MdLocationOn } from "react-icons/md"

const contactDetails = [
    {
        icon: <MdLocationOn className="flex-shrink-0 w-14 h-14 text-primary" />,
        title: <strong className="text-2xl mt-2 text-center">Corporate Office</strong>,
        description: <a href=" https://maps.app.goo.gl/brrKRHg4xWnQoBX68" target={"_blank"} className="text-base font-thin m-auto text-center hover:text-primary transform transition-transform hover:translate-x-0 hover:scale-105">
            525, Nakshtra VIII, Sadhu Vasvani Road, Rajkot - 360005, Gujarat, India.
        </a >,
    },
    {
        icon: <MdAddIcCall className="flex-shrink-0 w-14 h-14 text-primary" />,
        title: <strong className="text-2xl mt-2 text-center">Phone</strong>,
        description: <div className="flex flex-col text-base font-thin m-auto text-center gap-1">
            <a href="tel:919429653388" className="hover:text-primary transform transition-transform hover:translate-x-0 hover:scale-105" target={"_blank"}>+91 94296 53388</a>
            <a href="tel:919601703388" className="hover:text-primary transform transition-transform hover:translate-x-0 hover:scale-105" target={"_blank"}>+91 96017 03388</a>
        </div>,
    },
    {
        icon: <MdEmail className="flex-shrink-0 w-14 h-14 text-primary" />,
        title: <strong className="text-2xl mt-2 text-center">Emails & Support</strong>,
        description: <div className="flex flex-col text-base font-thin m-auto text-center gap-1">
            <a href="mailto:info@laconicgroup.in" className="hover:text-primary transform transition-transform hover:translate-x-0 hover:scale-105" target={"_blank"}>info@laconicgroup.in</a>
            <a href="mailto:sales@laconicgroup.in" className="hover:text-primary transform transition-transform hover:translate-x-0 hover:scale-105" target={"_blank"}>sales@laconicgroup.in</a>
            <a href="mailto:export@laconicgroup.in" className="hover:text-primary transform transition-transform hover:translate-x-0 hover:scale-105" target={"_blank"}>export@laconicgroup.in</a>
        </div>,
    },
]

const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: (direction: any) => {
        switch (direction) {
            case "left":
                return { x: -100, opacity: 0 };
            case "right":
                return { x: 100, opacity: 0 };
            case "bottom":
                return { y: 100, opacity: 0 };
            default:
                return {};
        }
    },
    visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Contact = () => {
    return (
        <div className="flex flex-col justify-between gap-32 lg:mb-32 mb-24">
            <div className="relative flex items-center justify-center bg-fixed h-96 bg-parallax bg-cover mt-24 opacity-70">
                <div className="w-full h-full bg-black bg-opacity-50" />
                <h1 className="absolute z-20 text-5xl lg:text-7xl text-white font-extrabold">
                    CONTACT US
                </h1>
            </div>
            <div className="py-12 w-full bg-gray-100 flex lg:flex-row flex-col justify-center items-center">
                <motion.div className="grid max-lg:grid-cols-1 grid-cols-3 px-16 lg:px-48 max-lg:gap-14"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                >
                    {contactDetails.map((item, index) => (
                        <motion.div className="flex flex-col gap-3 items-center justify-center lg:px-8"
                            key={index}
                            custom={index === 0 ? "left" : index === 1 ? "bottom" : "right"}
                            variants={itemVariants}
                        >
                            {item.icon}
                            {item.title}
                            {item.description}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="flex lg:flex-row lg:relative flex-col gap-y-8">
                <div className="bg-gray-100 py-16 px-14 lg:ml-44 flex flex-col justify-center gap-6 lg:w-1/2 w-full">
                    <p className="text-primary font-bold text-2xl">Send Us A Message</p>
                    <form className="flex flex-col gap-4">
                        <div className="">
                            <input name="name" type="text" placeholder="Name" className="px-2 py-2 text-start lg:w-2/3 w-full" />
                        </div>
                        <div className="">
                            <input name="email" type="email" placeholder="Email" className="px-2 py-2 text-start lg:w-2/3 w-full" />
                        </div>
                        <div className="">
                            <input name="subjectName" type="text" placeholder="subjectName" className="px-2 py-2 text-start lg:w-2/3 w-full" />
                        </div>
                        <div className="">
                            <textarea name="message" placeholder="Mesaage" className="px-2 py-2 text-start lg:w-2/3 w-full mb-8" rows={4} />
                        </div>
                        <Button className="px-7 py-2 text-white bg-primary rounded-full w-fit">
                            Send Message
                        </Button>
                    </form>
                </div>
                <div className='w-[90%] lg:w-[35%] h-64 bg-primary p-1 bg-opacity-20 lg:absolute left-1/2 top-[35%] self-center'>
                    <div className="bg-white p-2 w-full h-full">
                    <iframe className='w-full h-full' src="https://maps.google.com/maps?q=Laconic+Ceramic+Inc.+Rajkot&z=15&output=embed"></iframe>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Contact