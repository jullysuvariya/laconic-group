import { RevelDivHorizontal } from "./revealDivHorizontal"
import { RevelImgHorizontal } from "./revealImageHorizontal"

const environment = [
    {
        subtitle: "100% BIODEGRADABLE & PLASTIC FREE",
        title: "Made From Bagasse",
        description: "Sugarcane Bagasse could be a stringy by-product of sugar industry. The husk which is cleared out after the juice has been extricated from the sugarcane. It’s natural properties make it a extraordinary crude fabric for making flatware items such as bowls, plates, takeaway holders. Bagasse is additionally a idealize substitution for plastics & paper in retail bundling.",
        image: "/bagasse.jpg",
    },
    {
        subtitle: "NATURAL RAW MATERIALS",
        title: "Certified Food Safe",
        description: "As an critical connect of the nourishment industry, we get it our ‘shared responsibility’ towards nourishment security and recognize the coordinate affiliation of nourishment serving & bundling holders with the quality and security of nourishment. All our items routinely experience thorough tests with universal compliance measures to guarantee they are nourishment secure.",
        image: "/foodSafe.jpg",
    },
    {
        subtitle: "NO PLASTIC IS FANTASTIC",
        title: "Say No To Plastics",
        description: "Plastic isn’t biodegradable and does not go absent; It’ll take hundreds of a long time for a single piece of plastic to break down, and after that it’ll turn into a perilous microplastic. Avoiding plastic could be a way better arrangement than reusing as the reusing handle too is carbon seriously.",
        image: "/plastics.jpeg",
    },
]

const SafeEnvironment = () => {

    return (
        <div className="flex flex-col lg:gap-6 overflow-x-hidden">
            {environment.map((item, index) => {
                return (
                    <div
                        className={`flex flex-col lg:h-full w-full ${index % 2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                        key={index}
                    >
                        <div className="w-full lg:w-2/5 2xl:w-2/6 h-96 flex">
                            <RevelImgHorizontal src={item.image} className="w-full object-fill" reverseDirection={index % 2 != 0} />
                        </div>
                        <RevelDivHorizontal
                            reverseDirection={index % 2 == 0}
                            className="flex flex-col justify-center w-full lg:w-2/5 px-10 h-96 bg-primary2 text-white">
                            <div className="flex flex-col justify-center gap-8">
                                <div className="flex flex-col max-lg:text-center gap-1 lg:gap-2">
                                    <h1 className="font-thin text-sm" >{item.subtitle}</h1>
                                    <h1 className="font-bold text-3xl">{item.title}</h1>
                                </div>

                                <p className="lg:text-base max-lg:text-center">
                                    {item.description}
                                </p>
                            </div>
                        </RevelDivHorizontal>
                    </div>
                )
            })}
        </div >
    )

}

export default SafeEnvironment
