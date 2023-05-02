import { useEffect, useState } from "react";
import HomeLoading from "../components/HomeLoading";


export default function Profile() {
    const [loading, setLoading] = useState(true);

    if (loading) return <HomeLoading />

    return (
        <div>
            This is for User Profile
        </div>
    )
}