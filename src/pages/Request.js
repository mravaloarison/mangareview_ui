import { useEffect, useState } from "react";


export default function Request() {
    const [loading, setLoading] = useState(true);

    if (loading) return <HomeLoading />

    return (
        <div>
            This is for Requested Mangas
        </div>
    )
}