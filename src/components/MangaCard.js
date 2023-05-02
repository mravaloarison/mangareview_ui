export default function MangaCard(props) {
    return (
        // <Link to={`/manga/${props.mangaId}`} className="flex flex-col gap-2.5 group hover:scale-[1.01] transition duration-100 ease-in-out">
            <div className="flex flex-col gap-2.5 group hover:scale-[1.01] transition duration-100 ease-in-out"> 
                <div className="w-full relative h-52 md:h-72 lg:h-80 shadow bg-cover bg-center mix-blend-multiply rounded-md group-hover:opacity-75 transition duration-100 ease-in-out"
                    style={{ backgroundImage: `url(${props.link})`}}
                ></div>

                <div className=" w-full">
                    <h3 className="text-start font-semibold truncate">{props.title}</h3>
                    <p className="text-start text-sm text-gray-400">{props.year}</p>
                </div>
            </div>
        // {/* </Link> */}
    )
}