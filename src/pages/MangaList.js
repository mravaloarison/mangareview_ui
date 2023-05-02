import { useEffect, useState } from "react";
import HomeLoading from "../components/HomeLoading";


export default function MangaList() {
    const [loading, setLoading] = useState(true);

    if (loading) return <HomeLoading />

    return (
        <div>
            This is the manga list page
        </div>
    )
}