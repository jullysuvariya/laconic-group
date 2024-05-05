'use client'
import React from "react";
import {Carousel} from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
        >
            <div className="h-screen">
                <Image alt={"slider image 1"} src="/slider1.jpg" fill={true}/>
                {/*<p className="legend">Legend 1</p>*/}
            </div>
            <div className="h-screen">
                <Image alt={"slider image 2"} src="/slider2.jpg" fill={true}/>
                {/*<p className="legend">Legend 2</p>*/}
            </div>
            <div className="h-screen">
                <Image alt={"slider image 3"} src="/slider3.jpg" fill={true}/>
                {/*<p className="legend">Legend 3</p>*/}
            </div>
        </Carousel>
    );
}

export default ImageCarousel