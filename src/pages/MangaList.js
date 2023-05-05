import { useEffect, useState } from "react";
import HomeLoading from "../components/HomeLoading";
import Container from "../components/Container";
import { Link } from "react-router-dom";


export default function MangaList() {
    // set loading to true initially
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulate loading data for 2 seconds
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    if (loading) return <HomeLoading />;

    return (
        <Container>
            <div className="flex flex-col divide-y md:grid md:grid-cols-2 md:divide-y-0 lg:grid-cols-3 p-2.5 lg:p-5 md:gap-2.5 lg:gap-5">
            {Array.from({ length: 20 }, (_, index) => (
                <div className="flex items-start gap-2.5" key={index}>
                    <img className="w-32 h-48 rounded-md bg-cover bg-center shadow-lg" alt="" src="https://images.unsplash.com/photo-1682686580433-2af05ee670ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"/>

                    <div className="flex flex-col gap-1 w-full md:justify-between h-48">
                        <div>
                            <p className="font-semibold">Title of manga</p>
                            <p className="text-sm text-gray-500">May 2012</p>
                            <p className="text-sm text-gray-500">Manga</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5 text-sm pt-1.5">
                            <Link to='/manga/id' className="border p-1.5 rounded shadow-sm bg-slate-50 text-center">
                                View
                            </Link>
                            <button className="border p-1.5 rounded shadow-sm border-red-300 text-red-400">Remove</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </Container>
    );
}
