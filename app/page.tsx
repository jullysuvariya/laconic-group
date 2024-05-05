import Image from "next/image";
import Header from "@/components/Header"
import ImageCarousel from "@/components/ImageCarousel";
import ProductRow from "@/components/ProductRow";

const PRODUCTS = [
    {
        "title": "Premium Tiles",
        "subtitle": "Collection",
        "description": "A collection that adds a dash of luxury to every corner of your space and sets a" +
            " mood of tranquility because of its soothing and luxurious appeal. The Collection is filled " +
            "with premium patterns that are guaranteed to enrich your space.",
        "image": "/marble.jpeg",
        "sizes": ["80x240cm (15mm)", "80x160cm (9mm)", "60x60cm", "60x120cm", "20x120cm", "120X180cm"],
        "linkHref": "https://laconicceramic.com/",
        "linkText": "Visit Laconic Ceramic",
        "reverseRow": false
    },
    {
        "title": "Premium Papers",
        "subtitle": "Collection",
        "description": "A collection that adds a dash of luxury to every corner of your space and sets a" +
            " mood of tranquility because of its soothing and luxurious appeal. The Collection is filled " +
            "with premium patterns that are guaranteed to enrich your space.",
        "image": "/marble.jpeg",
        "sizes": ["80x240cm (15mm)", "80x160cm (9mm)", "60x60cm", "60x120cm", "20x120cm", "120X180cm"],
        "linkHref": "https://www.enrichpapers.com/",
        "linkText": "Visit Enrich Papers",
        "reverseRow": true
    },
]


export default function Home() {
    return (
        <div className="flex flex-col justify-between">
            <header className="fixed top-0 z-10 bg-black bg-opacity-40 py-6 px-20 w-full">
                <Header/>
            </header>
            <main>
                <section className="relative h-screen">
                    <ImageCarousel/>
                </section>
                {PRODUCTS.map((product) => {
                    return <section className="relative h-screen" key={product.title}>
                        <ProductRow
                            key={product.title}
                            title={product.title}
                            subtitle={product.subtitle}
                            description={product.description}
                            image={product.image}
                            sizes={product.sizes}
                            linkHref={product.linkHref}
                            linkText={product.linkText}
                            reverseRow={product.reverseRow}
                        />
                    </section>
                })}
            </main>
        </div>
    );
}
