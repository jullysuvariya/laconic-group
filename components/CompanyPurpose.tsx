const Card = ({title, description, icon}: { title: string, description: string, icon: string }) => {
    return (
        <li key={title} className="flex items-center flex-col rounded-2xl border-primary border px-20 py-14">
            <img className="mx-auto h-24 w-24 -mt-24 rounded-full md:h-20 md:w-20" src={icon} alt=""/>
            <h3 className="my-6 text-center font-semibold leading-7 text-2xl tracking-tight">{title}</h3>
            {description.split("\n").map((line, index) => {
                return (
                    <p key={index} className="text-sm leading-6 text-center text-gray-400">{line}</p>
                )
            })}
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
        "title": "Our Values",
        "description": "Integrity\n" +
            "Team Work\n" +
            "Performance\n" +
            "Entrepreneurial Spirit\n" +
            "Customer-Centric"
    }
]

const CompanyPurpose = () => {
    return (
        <div className="px-32 h-screen justify-center mb-32 flex flex-col gap-4">
            <h6 className="self-center text-3xl font-light">Our</h6>
            <h1 className="text-6xl self-center mb-16 text-center border-b-4 border-primary pb-8 px-10">
                Core Principles
            </h1>
            <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
            >
                {purposes.map((purpose) => {
                    return <Card title={purpose.title} description={purpose.description} key={purpose.title}
                                 icon={purpose.icon}/>
                })}
            </ul>
        </div>
    )
}

export default CompanyPurpose