import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FaDownload } from "react-icons/fa";
import SafeEnvironment from "@/components/SafeEnvironment";
import { RevelTextHorizontal } from "@/components/revelTextHorizonal";

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
    gridIndustries: [
        { src: "/img1_hotel.png", alt: "hotel image", name: "HOTELS" },
        { src: "/img2_restaurant.png", alt: "restaurant image", name: "RESTAURANTS" },
        { src: "/img3_caterers.png", alt: "caterers image", name: "CATERERS" },
        { src: "/img4_hospital.png", alt: "hospital image", name: "HOSPITALS" },
        { src: "/img5_supermarket.png", alt: "supermarket image", name: "SUPERMARKETS" },
    ],
}

const BiowareHome = () => {
    return (
        <>
            <div className="flex flex-col lg:gap-20 justify-center items-center">
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
                <div className="flex flex-row items-center justify-center w-full lg:pr-20 2xl:pr-0">
                    <div className="max-lg:hidden z-10 flex justify-end">
                        <img src="/bioware_1.jpeg" alt="bioware image" className="" />
                    </div>
                    <div className="bg-primary2 max-lg:px-10 py-12 lg:pl-48 lg:pr-10 flex flex-col text-white gap-7 w-full lg:w-[60%] lg:-ml-40">
                        <div className="max-lg:text-center">
                            <h6 className="mb-1">ABOUT US</h6>
                            <h1 className="text-3xl font-semibold">WELCOME TO LACONIC BIOWARE</h1>
                        </div>
                        <p className="text-base font-light 2xl:text-lg">
                            Laconic Bioware is eco- friendly best baggase product manufacturer in India that specializes
                            in producing high-quality, eco-friendly plates for both personal and commercial use. We make
                            sustainable tableware products that are 100% eco-friendly and biodegradable. Our company is
                            committed to using sustainable materials and processes in all aspects of our business, from
                            sourcing our raw materials to packaging and shipping our products.
                        </p>
                        <p className="text-base font-light 2xl:text-lg">
                            Our team is made up of experienced professionals who are passionate about creating products that
                            not only meet the needs of customers but also protect the environment. We take pride in the fact
                            that our plates are biodegradable, meaning they can be safely broken down and returned to the
                            earth without causing harm.
                        </p>
                        <button className="bg-white text-primary2 px-6 py-2 w-fit rounded-md mt-6 max-lg:self-center">Read More</button>
                    </div>
                </div>
                <div className="my-24 relative flex flex-col">
                    <div className="grid grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 gap-4 px-2">
                        {images.gridImages.map((item, index) => {
                            return (
                                <div className={`w-full flex flex-col items-center z-10 ${index % 2 == 0 ? "lg:translate-y-[15%]" : " "}`} key={index}>
                                    <img alt={item.alt} src={item.src} className={`w-1/2 sm:w-2/3 lg:w-full `} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="bg-primary2 text-center text-white pt-40 pb-20 lg:pt-72 lg:pb-44 gap-8 flex flex-col -my-28">
                        <h6 className="text-4xl font-semibold">Our Product</h6>
                        <p className="text-base font-light lg:px-64 px-8">
                            Laconic is more than just a tableware baggase products manufacturer. We are a team of individuals
                            who are passionate about the environment and committed to finding sustainable solutions for
                            everyday needs.
                        </p>
                    </div>
                    <div className="hidden lg:bg-gray-100 lg:border-solid lg:border lg:mx-40 lg:px-3 lg:py-12 lg:grid lg:grid-cols-6 lg:tems-center">
                        {images.gridProductsBagasse.map((item, index) => {
                            return (
                                <div className="flex justify-center" key={index}>
                                    <img alt={item.alt} src={item.src} className="w-11/12 h-11/12" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="mt-48 grid grid-rows-5 lg:grid-cols-3 lg:grid-rows-2 lg:px-40 lg:mt-20 gap-y-14 justify-items-center">
                        {images.gridProducts.map((item, index) => {
                            return (
                                <div className="bg-primary2 relative w-80 h-36 rounded-tl-xl rounded-b-[70px] rounded-tr-[95px] flex flex-row items-center justify-center"
                                    key="index"
                                >
                                    <span className="text-white font-bold text-xl mt-10">{item.name}</span>
                                    <img src={item.src} alt={item.alt} className="absolute w-40 h-24 ml-44 mb-20" />
                                </div>
                            )
                        })}
                    </div>
                    <button className="bg-primary2 text-white px-20 py-2 rounded-md mt-16 w-fit self-center">
                        <a href="/Laconic Biowares Catalog - Laconic Group.pdf" download="Laconic Biowares Catalog - Laconic Group.pdf" target="_blank">
                            <div className="flex items-baseline gap-2" ><FaDownload /> Download Catalog </div>
                        </a>
                    </button>
                </div>
            </div>
            <SafeEnvironment />
            <div className="flex flex-col items-center gap-16 lg:gap-20 my-32">
                <RevelTextHorizontal className="flex flex-col items-center text-4xl self-center text-center px-8 lg:px-10 border-b-4 border-primary2 pb-4">
                    Industries We Serve
                </RevelTextHorizontal>
                <div className="grid grid-rows-5 lg:grid-cols-5 lg:grid-rows-1 gap-8">
                    {images.gridIndustries.map((item, index) => {
                        return (
                            <div className="bg-primary2 py-5 px-11 flex flex-col items-center gap-5" key={index}>
                                <span className="text-white">{item.name}</span>
                                <img alt={item.alt} src={item.src} className="w-32 h-32" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default BiowareHome;
