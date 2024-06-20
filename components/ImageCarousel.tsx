'use client'
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const images = [
    { src: "/slide1.jpg", alt: "slider image 1" },
    { src: "/slide2.jpg", alt: "slider image 2" },
    { src: "/slide3.jpg", alt: "slider image 3" },
    { src: "/slide4.jpg", alt: "slider image 4" },
    { src: "/slide5.png", alt: "slider image 5" },
]

const ImageCarousel = () => {
    return (
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
            {images.map((item, index) => {
                return (
                    <div className="h-96 lg:h-screen" key={index}>
                        <Image alt={item.alt} src={item.src} fill={true} />
                    </div>

                )
            })}
        </Carousel >
    );
}

export default ImageCarousel