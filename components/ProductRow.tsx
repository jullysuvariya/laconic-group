import React from "react";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { RevelDivHorizontal } from "./revealDivHorizontal";
import { RevelImgHorizontal } from "./revealImageHorizontal";

interface ProductRowProps {
    image: string,
    title: string,
    subtitle: string,
    description: string,
    sizes: {
        [key: string]: string[];
    },
    linkText: string,
    linkHref: string,
    reverseRow?: boolean
}

const ProductRow = (props: ProductRowProps) => {
    return (
        <div
            className={`flex flex-col h-full w-full items-center justify-center py-10 lg:gap-10 ${props.reverseRow ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className={`w-4/5 max-lg:z-10 lg:w-2/5 h-full lg:flex ${props.reverseRow ? 'justify-start' : 'justify-end'}`}>
                <RevelImgHorizontal src={props.image} className="h-full object-contain rounded-2xl" reverseDirection={props.reverseRow} />
            </div>
            <div className="lg:w-3/5 p-12 lg:p-16 max-lg:-mt-6 bg-gray-100 rounded-2xl lg:my-10 h-full">
                <RevelDivHorizontal
                    reverseDirection={!props.reverseRow}
                    className="flex flex-col justify-center gap-4 lg:gap-8">
                    <div className="z-20 lg:z-0 flex flex-col text-2xl max-lg:text-center lg:text-5xl gap-2">
                        <h1 className="font-bold">{props.title}</h1>
                        <h1 className="font-thin" >{props.subtitle}</h1>
                    </div>

                    <p className="lg:text-base max-lg:text-center">
                        {props.description}
                    </p>

                    <div className="flex flex-col gap-6">
                        {Object.keys(props.sizes).map((key, index: number) => {
                            return (
                                <div className="flex flex-col gap-1">
                                    {key != "" && <h6 className="font-semibold">{key}</h6>}
                                    <ul className="grid lg:grid-cols-2 text-base list-inside list-disc">
                                        {props.sizes[key].map((size: string, index: number) => {
                                            return <li key={index}>
                                                {size}
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>

                    <Link
                        target='_blank'
                        rel="noopener noreferrer"
                        className="text-lg hover:underline flex items-center gap-2 text-primary"
                        href={props.linkHref}
                    >
                        {props.linkText}
                        <BiLinkExternal />
                    </Link>
                </RevelDivHorizontal>
            </div>
        </div>
    )
}

export default ProductRow