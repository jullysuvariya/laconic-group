'use client'

import Header from "@/components/Header"
import ImageCarousel from "@/components/ImageCarousel";
import ProductRow, { ProductRowProps } from "@/components/ProductRow";
import React, { useEffect, useState } from "react";
import AboutUs from "@/components/AboutUs";
import GroupOfCompanies from "@/components/GroupOfCompanies";
import CompanyPurpose from "@/components/CompanyPurpose";
import Footer from "@/components/Footer";
import 'keen-slider/keen-slider.min.css'
import { TextShimmerDemo } from "@/components/splashScreen";

const PRODUCTS: ProductRowProps[] = [
    {
        title: "Premium Tiles",
        subtitle: "Collection",
        description: "Add timeless elegance to your space with the Tiles Collection, a fine blend of traditional methods and modern designs that adds a sturdy element of amazement! Add a piece of natural beauty and enhance its aura! Redefine the Luxury with Laconic Ceramic",
        image: "/tiles.jpg",
        sizes: {
            "": ["300x300mm", "300x600mm", "600x600mm", "800x800mm", "600x1200mm", "600x1800mm", "800x1200mm", "800x1600mm", "1000x1000mm", "1200x1200mm", "1200x1800mm", "1200x2400mm"]
        },
        linkHref: "https://laconicceramic.com/",
        linkText: "Visit Laconic Ceramic",
    },
    {
        title: "SPC Vinyl Flooring",
        subtitle: "Collection",
        description: "Give areas with high footfall a shield of story creations that are elegant in appeal and durable in property with our Essential SPC Flooring Collection! Embrace ordinary spaces with extraordinary surfaces with Laconic Surfaces!",
        image: "/spc.jpg",
        sizes: {
            "": ["181x1220mm", "230x1220mm", "230x1524mm", "310x601mm"]
        },
        linkHref: "https://www.enrichpapers.com/",
        linkText: "Visit Enrich Papers",
    },
    {
        title: "Building Materials",
        subtitle: "Collection",
        description: "Add motifs of inspiration to your everyday routine with our Premium Bathware Collection that keeps you shielded while serving an aesthetic look. Elevate your bath ware experiences to a distinguished height with our premium ranges.",
        image: "/buildingMaterial.jpg",
        sizes: {
            "Bathware Collection": ["Water Closets", "Urinals", "Basins", "Sinks (Quartz Sinks, Steel Sinks)", "Faucets"],
            "Tiling Solutions": ["Adhesive", "Grout", "Admixture", "Waterproofing"]
        },
        linkHref: "https://www.enrichpapers.com/",
        linkText: "Visit Enrich Papers",
    },
    {
        title: "Paper & Paperboards",
        subtitle: "Collection",
        description: "Finding A Permanent Paper Solution Is Our Ultimate Goal! We are the industry leaders and provides the most reliable and sustainable solution for all Your Paper & Paperboards Requirements",
        image: "/paper.jpg",
        sizes: {
            "": ["Duplex Boards (CCNB)", "Triplex Boards (Whiteback)", "Testliner & Fluting Paper", "Kraft Paper Boards", "MG Poster", "Tissue Paper"]
        },
        linkHref: "https://www.enrichpapers.com/",
        linkText: "Visit Enrich Papers",
    },
    {
        title: "Biowares & Sustainable Products",
        subtitle: "Collection",
        description: "Laconic is more than just a brand; it's a commitment to a greener, more sustainable world. Founded on the principles of eco-friendliness and quality, we are dedicated to crafting biodegradable and compostable tableware that not only elevates your dining experience but also reduces environmental impact",
        image: "/baggase.jpg",
        sizes: {
            "": ["Bagasse Plates", "Bagasse Bowls", "Bagasse Compartment Plates", "Bagasse Takeaway Clamshell", "Bagasse Food Container", "Paper Cups & Bowls"]
        },
        linkHref: "https://www.enrichpapers.com/",
        linkText: "Visit Enrich Papers",
    },
    {
        title: "Polypack Products",
        subtitle: "Collection",
        description: "The company is backed by superior infrastructure, young & dynamic management, skilled & dedicated workforce, and grit to be a market leader in the Polypack industry. Our quality PP woven products are widely known for their remarkable properties like durability, high wearing & tearing strength, smooth finishes, and competitive rates. Our products are extensively used for storing and transporting numerous contents.",
        image: "/polypack.jpg",
        sizes: {
            "": ["PP Woven Fabric", "PP Bags", "PP Sacks", "PP Rope & Twine", "FIBC Bags", "Fishing Net", "PVC Chairs & Tables"]
        },
        linkHref: "https://www.enrichpapers.com/",
        linkText: "Visit Enrich Papers",
    },
    {
        title: "Industrial Machinery & Equipments",
        subtitle: "Collection",
        description: "Tingenious offerings that we put forward under the brand name which find wide applications in areas where the pneumatic air products are required. Thus, we cater to the requirements of a number of Engineering Colleges, Government Sector, Oil Mills, Cement Industry, Ceramic Industry, Sugar Industry, Forging Plants, Thermal Power Stations, Petroleum Plants, Cotton Ginning Units, Kitchenware units, Garage units, Automobile parts units, Embroidery units, Agricultural land, and several small & medium industries in India and overseas.",
        image: "/marble.jpeg",
        sizes: {
            "": ["Air Compressors", "High Pressure Pumps", "Slotting Machines", "Heavy Duty Grinders & Polishers", "Centrifugal Blowers", "Coolant Pumps", "Burner", "Switch Boards", "Electric Motors", "Welding Machines", "Lathe Machines", "Drill Machines"]
        },
        linkHref: "https://www.enrichpapers.com/",
        linkText: "Visit Enrich Papers",
    },
    {
        title: "Electrical Appliances",
        subtitle: "Collection",
        description: "We has woven a tapestry of trust with its customers, offering state-of-the-art electrical lifestyle solutions that make their life simple and experiences better. Trust is our currency, earned through years of dedicated service and a commitment to excellence. With millions of satisfied customers worldwide, we've become synonymous with reliability and quality that stands the test of time.",
        image: "/appliances.jpg",
        sizes: {
            "": ["Fans", "Heater", "LED Lightings", "Iron & Kettle", "MCB & ELCB", "Electric Wires & Cables"]
        },
        linkHref: "https://www.enrichpapers.com/",
        linkText: "Visit Enrich Papers",
    },
];

export default function Home() {

    const [isAnimatingOut, setIsAnimatingOut] = useState(false);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsAnimatingOut(true);
        }
    }, []);

    useEffect(() => {
        if (isAnimatingOut) {
            const loader = document.getElementById('globalLoader');
            if (loader) {
                loader.addEventListener('animationend', () => {
                    loader.remove();
                });
            }
        }
    }, [isAnimatingOut]);



    useEffect(() => {
        window.onload = function () {
            console.log("window loaded");
            // Check if the URL contains a hash (e.g., #elementId)
            if (window.location.hash) {
                // Get the element specified in the URL hash
                var element = document.querySelector(window.location.hash);

                // Scroll to the element if it exists
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
    }, []);
    // bg-gradient-to-b via-60% via-white from-white to-primary-500
    return (
        <>
            <div id="globalLoader" className={`fixed z-50 bg-primary-500 w-screen h-screen ${isAnimatingOut && 'animate-slideout' }`}>
                <div className="w-full h-full bg-primary flex items-center justify-center animate-slidein">
                    <TextShimmerDemo />
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <Header />
                <main>
                    {/* <section className="h-screen">
                    <TextShimmerDemo />
                </section> */}
                    <section className="relative lg:h-screen">
                        <ImageCarousel />
                    </section>
                    <AboutUs />
                    <GroupOfCompanies />
                    <div id="products">
                        {PRODUCTS.map((product, index: number) => {
                            return <section className="relative lg:h-screen" key={product.title}>
                                <ProductRow
                                    key={product.title}
                                    title={product.title}
                                    subtitle={product.subtitle}
                                    description={product.description}
                                    image={product.image}
                                    sizes={product.sizes}
                                    linkHref={product.linkHref}
                                    linkText={product.linkText}
                                    reverseRow={index % 2 == 1}
                                />
                            </section>
                        })}
                    </div>
                    <CompanyPurpose />
                    <Footer />
                </main>
            </div>
        </>
    );
}
