import React from "react";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

interface ProductRowProps {
    image: string,
    title: string,
    subtitle: string,
    description: string,
    sizes: string[],
    linkText: string,
    linkHref: string,
    reverseRow?: boolean
}

const ProductRow = (props: ProductRowProps) => {
    return (
        <div
            className={`flex flex-col h-full w-full items-center justify-center py-10 lg:gap-10 ${props.reverseRow ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className={`w-4/5 max-lg:z-10 lg:w-2/5 h-full lg:flex ${props.reverseRow ? 'justify-start' : 'justify-end'}`}>
                <img alt={"product image"} className="h-full object-contain rounded-2xl" src={props.image}/>
            </div>
            <div className="lg:w-3/5 flex flex-col p-16 lg:p-20 justify-center gap-4 lg:gap-12 bg-gray-100 max-lg:-mt-10 rounded-2xl lg:my-10 h-full">
                <div className="z-20 lg:z-0 flex flex-col text-2xl max-lg:text-center lg:text-6xl gap-2">
                    <p className="font-bold">{props.title}</p>
                    <p className="font-thin">{props.subtitle}</p>
                </div>

                <p className="lg:text-lg ">
                    {props.description}
                </p>

                <ul className="grid lg:grid-cols-2 text-lg list-inside list-disc">
                    {props.sizes.map((size: string, index: number) => {
                        return <li key={index}>
                            {size}
                        </li>
                    })}
                </ul>

                <Link
                    target='_blank'
                    rel="noopener noreferrer"
                    className="text-xl hover:underline flex items-center gap-2 text-primary"
                    href={props.linkHref}
                >
                    {props.linkText}
                    <BiLinkExternal />
                </Link>
            </div>
        </div>
    )
}

export default ProductRow