import { useEffect, useState } from "react";
import HomeLoading from "../components/HomeLoading";


export default function Request() {
    const [loading, setLoading] = useState(true);

    if (loading) return <HomeLoading />

    return (
        <div>
            This is for Requested Mangas
        </div>
    )
}