import { useEffect, useState } from "react";
import HomeLoading from "../components/HomeLoading";


export default function Profile() {
    // set loading to true initially
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulate loading data for 2 seconds
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    if (loading) return <HomeLoading />

    return (
        <div>
            This is for User Profile
        </div>
    )
}