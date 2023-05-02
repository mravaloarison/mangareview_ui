import Container from "./Container";

export default function Footer() {
    return (
        <footer className="bg-[#F5F5F5]">
            <Container>
                <div className="text-sm text-gray-500 p-4 text-center border-t">
                    © 2023 by <span className="font-semibold text-slate-700"><a href="https://github.com/mravaloarison">Mami</a></span>
                </div>
            </Container>
        </footer>
    )
}