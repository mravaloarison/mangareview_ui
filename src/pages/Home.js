import { useEffect, useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";

import MangaCard from "../components/MangaCard";
import HomeLoading from "../components/HomeLoading";


export default function Home() {
    const [allMangas, setAllMangas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/")
            .then(response => response.json())
            .then(response => {
                setAllMangas(response);
                setLoading(false);
            })
    }, [])

    if (loading) return <HomeLoading />

    return (
        <Container>
            {allMangas.map((category, index) => (

                <div key={index} class="p-2.5 flex flex-col gap-3.5 md:p-4 lg:py-5 lg:gap-5">
                    <h2 class="text-3xl">{category.name}</h2>

                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 lg:gap-8">
                        {category.data.map((manga, i) => (
                            <Link keys={i} to={`/manga/${manga.manga_id}`}>
                                <MangaCard 
                                    title={manga.titles}
                                    year={manga.start_date}
                                    link={manga.poster_image}
                                />
                            </Link>
                        ))}
                    </div>

                </div>
                                    
            ))}
        </Container>
    )
}