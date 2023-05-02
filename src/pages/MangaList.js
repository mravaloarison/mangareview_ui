import { useEffect, useState } from "react";


export default function MangaList() {
    const [loading, setLoading] = useState(true);

    if (loading) return <HomeLoading />
    
    return (
        <div>
            This is the manga list page
        </div>
    )
}