export default function MangaDescription(props) {
    return (
        <div class="p-4 w-full lg:flex lg:gap-8 lg:py-8">

            <div class="flex flex-col gap-4">
                <img alt={props.title} className="h-96 w-72 mx-auto bg-cover bg-center shadow-lg rounded" src={props.poster_image} />
                <button className="w-72 mx-auto border border-amber-700 rounded-md shadow-sm p-2.5 bg-amber-700 text-slate-50">Add to your list</button>
                <button className="w-72 mx-auto border rounded-md shadow-sm p-2.5">Request manga</button>
            </div>

            <div class="py-4 lg:py-0">
                <div class="flex flex-col gap-4">
                    <h1 class="text-2xl lg:text-5xl">{props.title}</h1>
                    <p class="text-sm text-gray-500">{props.description}</p>
                    <p>First published: <span className="text-sm text-gray-500"> {props.start_date} </span> </p>
                    <p>Manga Type: <span className="text-sm text-gray-500"> {props.manga_type} </span> </p>
                    
                    
                    <div className="text-gray-500 flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                        </svg>
                        <p>{props.rate} <span className="text-sm">{`(${props.total_reviews} reviews)`}</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}