const Card = ({title, description, icon}: {title: string, description: string, icon: string}) => {
    return (
        <li key={title} className="flex items-center flex-col rounded-2xl border-sky-700 border px-16 gap-6 py-10">
            <img className="mx-auto h-24 w-24 -mt-20 rounded-full md:h-20 md:w-20" src={icon} alt=""/>
            <h3 className="mt-6 text-center font-semibold leading-7 text-2xl tracking-tight">{title}</h3>
            <p className="text-sm leading-6 text-center text-gray-400">{description.replaceAll("\n", "<br/>")}</p>
        </li>

    )
}

const purposes = [
    {
        "icon": "vision_icon.svg",
        "title": "Our Vision",
        "description": "To be the world's no. 1 Provider of innovative solutions in consumer electrical products"
    },
    {
        "icon": "mision_icon.svg",
        "title": "Our Mission",
        "description": "To persistently work to achieve our vision by transforming our self into a rapidly growing," +
            " high performing and exponential organization which will continue to develop and improve process and" +
            " products to ensure innovative products with higher value and quality at a competitive price."
    },
    {
        "icon": "value.svg",
        "title": "Our Value",
        "description": "Integrity\n" +
            "Team Work\n" +
            "Performance\n" +
            "Entrepreneurial Spirit\n" +
            "Customer-Centric."
    }
]

const CompanyPurpose = () => {
    return (
        <div className="h-screen p-32">
            <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
            >
                {purposes.map((purpose) => {
                    return <Card title={purpose.title} description={purpose.description} key={purpose.title} icon={purpose.icon}/>
                })}
            </ul>
        </div>
    )
}

export default CompanyPurpose