import { RevelTextHorizontal } from "./revelTextHorizonal"
import { RevelTextVertical } from "./revelTextVertical"

const paragraph1 = "30+ Years Of Excellence With Quality At It's Best!"

const AboutUs = () => {
    return (
        <div className="flex flex-col lg:h-screen p-16 lg:px-64 justify-center text-center lg:text-lg gap-8 lg:mt-20">
            <RevelTextHorizontal className="flex flex-col items-center text-3xl lg:text-6xl self-center text-center px-10 border-b-4 border-primary mb-8 lg:mb-16 pb-4 lg:pb-8">
                Legacy of Excellence
            </RevelTextHorizontal>
            {/* <div className="border-b-4 border-primary mb-8 lg:mb-16"></div> */}
            <RevelTextVertical>
                <h1 className="text-xl lg:text-2xl self-center text-center">
                    <strong>
                        30+ Years Of Excellence With Quality At It&lsquo;s Best!
                    </strong>
                </h1>
                </RevelTextVertical>
                <RevelTextVertical>
                <p>
                    The core area business of <strong>Laconic Inc</strong> is one of the part of the <strong>Laconic Group of
                        Companies</strong> which develop and provide high-quality products such as Ceramic & Porcelain Tiles,
                    SPC Vinyl Flooring, Sanitaryware & Bathware, Paper & Paperboards, Biowares & Bagasse Products,
                    PP Fabric & PP Bags, Industrial Machinery & Equipments like Air Compressor, Grinders, Pressure Pump,
                    Blower, Switch Boards and Many More <strong>since 1989</strong>. Now our company is separately working
                    in the international market & export to deliver the best products with our add-on services, mainly
                    manufactured products of our group.
                </p>
                </RevelTextVertical>
                <RevelTextVertical>
                <p>
                    <strong>
                        <i>
                            “Our World Class Production units are equipped with cutting edge Modern Technology to Match
                            Global Standards”
                        </i>
                    </strong>
                </p>
                </RevelTextVertical>
                <RevelTextVertical>
                <p>
                    The team at our firm are the best in their own way and it’s our word of honor that we provide timely and
                    precise service to our esteemed clients.
                </p>
            </RevelTextVertical>
        </div>
    )
}

export default AboutUs