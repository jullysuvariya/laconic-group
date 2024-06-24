import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const images = {
    carouselImages: [
        { src: "/slider1.png", alt: "slider image 1" },
        { src: "/slider2.png", alt: "slider image 2" },
        { src: "/slider3.png", alt: "slider image 3" },
    ],
    gridImages: [
        { src: "/bioware_grid_img1.png", alt: "bioware image" },
        { src: "/bioware_grid_img2.png", alt: "bioware image" },
        { src: "/bioware_grid_img3.png", alt: "bioware image" },
        { src: "/bioware_grid_img4.jpg", alt: "bioware image" },
    ],
    gridProductsBagasse: [
        { src: "/bioware_grid_product1.png", alt: "bioware product image" },
        { src: "/bioware_grid_product2.png", alt: "bioware product image" },
        { src: "/bioware_grid_product3.png", alt: "bioware product image" },
        { src: "/bioware_grid_product4.png", alt: "bioware product image" },
        { src: "/bioware_grid_product5.png", alt: "bioware product image" },
        { src: "/bioware_grid_product6.png", alt: "bioware product image" },
    ],
    gridProducts: [
        { src: "/bioware_product1.png", alt: "bioware product image", name: "PLATES" },
        { src: "/bioware_product2.png", alt: "bioware product image", name: "BOWLS" },
        { src: "/bioware_product3.png", alt: "bioware product image", name: "COMPARTMENT PLATES" },
        { src: "/bioware_product4.png", alt: "bioware product image", name: "FOOD CONTAINER" },
        { src: "/bioware_product5.png", alt: "bioware product image", name: "TAKEAWAY CLAMSHELL" },
    ],
}

const BiowareHome = () => {
    return (
        <div className="flex flex-col gap-20 justify-center items-center">
            <Carousel
                className="w-full"
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                stopOnHover={false}
                showArrows={false}
                dynamicHeight={true}
                interval={2000}
                showThumbs={false}
            >
                {images.carouselImages.map((item, index) => {
                    return (
                        <div className="h-96 lg:h-screen" key={index}>
                            <Image alt={item.alt} src={item.src} fill={true} />
                        </div>
                    )
                })}
            </Carousel >
            <div className="flex flex-row relative">
                <div className="absolute z-10 mr-12 translate-y-1/2 translate-x-10">
                    <img src="/bioware_1.jpeg" alt="bioware image" className="w-[91%]" />
                </div>
                <div className="bg-primary2 py-12 pl-48 pr-10 flex flex-col text-white gap-7 w-[60%] translate-x-[53%]">
                    <div>
                        <h6 className="mb-1">ABOUT US</h6>
                        <h1 className="text-3xl font-semibold">WELCOME TO LACONIC BIOWARE</h1>
                    </div>
                    <p className="text-base font-light">
                        Laconic Bioware is eco- friendly best baggase product manufacturer in India that specializes
                        in producing high-quality, eco-friendly plates for both personal and commercial use. We make
                        sustainable tableware products that are 100% eco-friendly and biodegradable. Our company is
                        committed to using sustainable materials and processes in all aspects of our business, from
                        sourcing our raw materials to packaging and shipping our products.
                    </p>
                    <p className="text-base font-light">
                        Our team is made up of experienced professionals who are passionate about creating products that
                        not only meet the needs of customers but also protect the environment. We take pride in the fact
                        that our plates are biodegradable, meaning they can be safely broken down and returned to the
                        earth without causing harm.
                    </p>
                    <button className="bg-white text-primary2 px-6 py-2 w-fit rounded-md mt-6">Read More</button>
                </div>
            </div>
            <div className="my-24 relative flex flex-col">
                <div className="grid grid-cols-4 gap-4 px-2">
                    {images.gridImages.map((item, index) => {
                        return (
                            <div className={`z-10 ${index % 2 == 0 ? "translate-y-[15%]" : " "}`} key={index}>
                                <img alt={item.alt} src={item.src} />
                            </div>
                        )
                    })}
                </div>
                <div className="bg-primary2 text-center text-white pt-72 pb-44 gap-8 flex flex-col -my-28 ">
                    <h6 className="text-4xl font-semibold">Our Product</h6>
                    <p className="text-base font-light px-64">
                        Laconic is more than just a tableware baggase products manufacturer. We are a team of individuals
                        who are passionate about the environment and committed to finding sustainable solutions for
                        everyday needs.
                    </p>
                </div>
                <div className="bg-gray-100 border-solid border mx-40 px-3 py-12 grid grid-cols-6 items-center">
                    {images.gridProductsBagasse.map((item, index) => {
                        return (
                            <div className="flex justify-center" key={index}>
                                <img alt={item.alt} src={item.src} className="w-11/12 h-11/12" />
                            </div>
                        )
                    })}
                </div>
                <div className="grid grid-cols-3 grid-rows-2 px-40 mt-20 gap-y-14 justify-items-center">
                    {images.gridProducts.map((item, index) => {
                        return (
                            <div className="bg-primary2 w-80 h-36 rounded-tl-xl rounded-b-[70px] rounded-tr-[95px] flex flex-row items-center"
                                key="index"
                            >
                                <div className="w-1/2 text-center">
                                    <span className="text-white font-bold text-xl">{item.name}</span>
                                </div>
                                <img src={item.src} alt={item.alt} className="w-32 h-32 self-start ml-10 -translate-y-5" />
                            </div>
                        )
                    })}
                </div>
                <button className="bg-primary2 text-white px-20 py-2 rounded-md mt-16 w-fit self-center">
                    <a href="/Laconic Biowares Catalog - Laconic Group.pdf" download="Laconic Biowares Catalog - Laconic Group.pdf" target="_blank">
                        Download Brochure
                    </a>
                </button>
            </div>
            <div className="">
                
            </div>

        </div>
    )
}

export default BiowareHome;
