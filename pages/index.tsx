import ImageCarousel from "@/components/ImageCarousel";
import ProductRow, { ProductRowProps } from "@/components/ProductRow";
import React, { useEffect, useState } from "react";
import AboutUs from "@/components/AboutUs";
import GroupOfCompanies from "@/components/GroupOfCompanies";
import CompanyPurpose from "@/components/CompanyPurpose";
import LaconicCompanyLayout from "@/layout/LaconicCompanyLayout";

const PRODUCTS: ProductRowProps[] = [
    {
        title: "Premium Tiles",
        subtitle: "Collection",
        description: "Enhance high-traffic areas with the grace and resilience of our essential SPC Flooring Collection! Transform everyday spaces into extraordinary environments with Laconic Surfaces!",
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
        linkHref: "https://www.laconicsurfaces.com/",
        linkText: "Visit Laconic Surfaces",
    },
    {
        title: "Building Materials",
        subtitle: "Collection",
        description: "Infuse your daily routine with motifs of inspiration through our Premium Bathware Collection, combining both functionality and aesthetics. Elevate your bathing experiences to new heights with our premium ranges, ensuring both style and durability.",
        image: "/buildingMaterial.jpg",
        sizes: {
            "Bathware Collection": ["Water Closets", "Urinals", "Basins", "Sinks (Quartz Sinks, Steel Sinks)", "Faucets"],
            "Tiling Solutions": ["Adhesive", "Grout", "Admixture", "Waterproofing"]
        },
        linkHref: "https://ulixocera.com/",
        linkText: "Visit Ulixo Cera",
    },
    {
        title: "Paper & Paperboards",
        subtitle: "Collection",
        description: "Our mission is to find a permanent paper solution! As pioneers in the industry, we deliver the most reliable and sustainable options for all your paper and paperboard needs.",
        image: "/paper.jpg",
        sizes: {
            "": ["Duplex Boards (CCNB)", "Triplex Boards (Whiteback)", "Testliner & Fluting Paper", "MG Poster"]
        },
        linkHref: "https://www.enrichpapers.com/",
        linkText: "Visit Enrich Papers",
    },
    {
        title: "Biowares & Sustainable Products",
        subtitle: "Collection",
        description: "Laconic represents more than just a brand, it embodies a commitment to a greener, more sustainable world. Built on the foundations of eco-friendliness and quality, we devote ourselves to producing biodegradable and compostable tableware. Our products not only enhance your dining experience but also contribute to reducing environmental impact.",
        image: "/baggase.jpg",
        sizes: {
            "": ["Bagasse Plates", "Bagasse Bowls", "Bagasse Compartment Plates", "Bagasse Takeaway Clamshell", "Bagasse Food Container", "Paper Cups & Bowls"]
        },
        linkHref: "/bioware/bioware_home",
        linkText: "Visit Laconic Biowares",
    },
    {
        title: "Polypack Products",
        subtitle: "Collection",
        description: "Benefiting from superior infrastructure, a dynamic young management team, a skilled and committed workforce, and a determination to lead the market in the Polypack industry, our company stands strong. Renowned for exceptional properties such as durability, high strength against wear and tear, smooth finishes, and competitive pricing, our quality PP woven products are highly esteemed. They serve extensively in storing and transporting various contents.",
        image: "/polypack.jpg",
        sizes: {
            "": ["PP Woven Fabric", "PP Bags", "PP Sacks", "PP Rope & Twine", "FIBC Bags", "Fishing Net", "PVC Chairs & Tables"]
        },
        linkHref: "#",
        linkText: "Visit Laconic Polypack",
    },
    {
        title: "Industrial Machinery & Equipments",
        subtitle: "Collection",
        description: "Our brand offers ingenious solutions widely applicable in areas requiring pneumatic air products. We meet the diverse needs of Engineering Colleges, Government Sectors, Oil Mills, Cement, Ceramic, and Sugar Industries, as well as Forging Plants, Thermal Power Stations, Petroleum Plants, Cotton Ginning Units, Kitchenware, Garage, and Automobile Parts Units, Embroidery units, Agricultural sectors, and numerous small and medium industries, both domestically and internationally.",
        image: "/captainTulsi.jpg",
        sizes: {
            "": ["Air Compressors", "High Pressure Pumps", "Slotting Machines", "Heavy Duty Grinders & Polishers", "Centrifugal Blowers", "Coolant Pumps", "Burner", "Switch Boards", "Electric Motors", "Welding Machines", "Lathe Machines", "Drill Machines"]
        },
        linkHref: "https://www.captainaircompressor.com/",
        linkText: "Visit Captain & Tulsi Industries",
    },
    {
        title: "Electrical Appliances",
        subtitle: "Collection",
        description: "We have crafted a tapestry of trust with our customers, providing cutting-edge electrical lifestyle solutions that simplify their lives and enhance their experiences. Trust is our foundation, built over years of dedicated service and a relentless pursuit of excellence. With millions of satisfied customers worldwide, we have become synonymous with reliability and quality that endures the test of time.",
        image: "/appliances.jpg",
        sizes: {
            "": ["Fans", "Heater", "LED Lightings", "Iron & Kettle", "MCB & ELCB", "Electric Wires & Cables"]
        },
        linkHref: "#",
        linkText: "Visit Laconic Appliances",
    },
];

export default function Home() {

    // bg-gradient-to-b via-60% via-white from-white to-primary-500
    
    return (
        <>
            <div className="flex flex-col justify-between">
                <main>
                    <section className="relative lg:h-screen">
                        <ImageCarousel />
                    </section>
                    <AboutUs />
                    <GroupOfCompanies />
                    <div id="products" className="w-full overflow-x-hidden">
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
                </main>
            </div>
        </>
    );
}
