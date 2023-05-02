import Container from "../components/Container";
import HomeLoading from "../components/HomeLoading";
import MangaDescription from "../components/MangaDescritpion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Manga() {
    const [mangaDetails, setMangaDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/manga/${id}`)
            .then((response) => response.json())
            .then((response) => { 
                setMangaDetails([response[0]]);
                setLoading(false); 
            });
        }, [id]);

    if (loading) return <HomeLoading />

    return (
        <>
            <Container>

                {mangaDetails.map((obj, index) => {
                    return <MangaDescription 
                        key={index} 
                        title={obj.titles}
                        description={obj.descritpion}
                        poster_image={obj.poster_image}
                        start_date={obj.start_date}
                        manga_type={obj.manga_type}
                        rate='0.0'
                        total_reviews='0'
                    />
                })}

            </Container>
        </>
    );
}
