import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image";

const Contact = () => {
    return (
        <div className="">
            <Header />

            <div className="flex flex-col justify-between">
                <div className="h-96">
                    <Image alt={"contact us image"} src="/contactUs.jpg" fill={true} />
                </div>

            </div>
            <Footer />

        </div>
    )
}

export default Contact