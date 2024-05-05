import React from "react";
import Link from "next/link";

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
            <div className="w-3/5 flex flex-col p-20 justify-center gap-16 bg-gray-200 rounded-2xl my-10 h-full">
                <div className="text-6xl flex flex-col">
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
                    className="text-xl hover:underline hover:text-blue-900"
                    href={props.linkHref}
                >
                    {props.linkText}
                </Link>
            </div>
        </div>
    )
}

export default ProductRow