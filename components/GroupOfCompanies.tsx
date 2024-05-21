import React from "react";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 10000, easing: (t: any) => t };

const logos = [
    "/laconic_ceramincs_logo_2.png",
    "/capital_logo_2.png",
    "/maruti_logo_2.png",
    "/laconic_biowares_logo_2.png",
    "/captain_logo_2.png",
    "/laconic_polypack_logo_2.png",
    "/parco_logo_2.png",
    "/enrich_logo_2.png",
    "/ulixo_logo_2.png",
    "/phinix_ceramics_logo_2.png",
    "/tulsi_logo_2.png",
    "/laconic_surfaces_logo_2.png",
    "/tulsi_real_choice_logo_2.png",
]

const GroupOfCompanies = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        slides: {
            perView: 6,
        },
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
    });
    return (
        <div className="flex flex-col lg:h-screen justify-center text-2xl gap-4">
            <h6 className="self-center text-sm lg:text-3xl font-light">Our</h6>
            <h1 className="text-2xl lg:text-6xl self-center mb-8 lg:mb-16 text-center border-b-4 border-primary pb-4 lg:pb-8 px-10">
                Group of Companies
            </h1>
            <div ref={sliderRef} className="keen-slider">
                {logos.map((logo, index) => {
                    return (
                        <div key={index} className="keen-slider__slide flex justify-center items-center">
                            <img className="h-16" alt="company logo" src={logo}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GroupOfCompanies