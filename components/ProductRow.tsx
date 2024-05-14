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
            className={`flex h-full w-full items-center justify-center py-10 gap-10 ${props.reverseRow ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-2/5 h-full flex ${props.reverseRow ? 'justify-start': 'justify-end' }`}>
                <img alt={"product image"} className="h-full object-contain rounded-2xl" src={props.image}/>
            </div>
            <div className="w-3/5 flex flex-col p-20 justify-center gap-16 bg-gray-100 rounded-2xl my-10 h-full">
                <div className="text-6xl flex flex-col gap-2">
                    <p className="font-bold">{props.title}</p>
                    <p className="font-thin">{props.subtitle}</p>
                </div>

                <p className="text-lg">
                    {props.description}
                </p>

                <ul className="grid grid-cols-2 text-lg list-inside list-disc">
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