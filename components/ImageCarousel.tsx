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
            <div className="h-96 lg:h-screen">
                <Image alt={"slider image 1"} src="/slide1.jpg" fill={true}/>
                {/*<p className="legend">Legend 1</p>*/}
            </div>
            <div className="h-96 lg:h-screen">
                <Image alt={"slider image 2"} src="/slide2.jpg" fill={true}/>
                {/*<p className="legend">Legend 2</p>*/}
            </div>
            <div className="h-96 lg:h-screen">
                <Image alt={"slider image 3"} src="/slide3.jpg" fill={true}/>
                {/*<p className="legend">Legend 3</p>*/}
            </div>
            <div className="h-96 lg:h-screen">
                <Image alt={"slider image 4"} src="/slide4.jpg" fill={true}/>
                {/*<p className="legend">Legend 3</p>*/}
            </div>
            <div className="h-96 lg:h-screen">
                <Image alt={"slider image 5"} src="/slide5.png" fill={true}/>
                {/*<p className="legend">Legend 3</p>*/}
            </div>
        </Carousel>
    );
}

export default ImageCarousel