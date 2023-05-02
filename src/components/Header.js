import BtnIcon from "./BtnIcon";
import Container from "./Container";
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Nav from "./Nav";


function BtnMenu() {
    document.getElementById("lg-menu").classList.toggle("hidden")
}

export default function Header() {
    return (
        <header class="border-b shadow-sm sticky top-0 bg-white z-10">
            <Container>
                <ul className="flex justify-between items-center p-2.5 md:p-4">
                    <li className="text-2xl lg:text-3xl font-extralight text-amber-800">
                        <a href='/'>
                            Read<span className="font-semibold">Mangas</span>
                        </a>
                    </li>
                    <li className="flex gap-2.5">
                        <BtnIcon id='btn-search'>
                            <MagnifyingGlassIcon className="w-6 h-6" />
                        </BtnIcon>

                        <BtnIcon clicked={BtnMenu}>
                            <Bars3Icon className="w-6 h-6" />
                        </BtnIcon>
                    </li>
                </ul>
            </Container>

            <div id="lg-menu" className="hidden">
                <div className="w-screen h-full fixed top-0 -z-10"></div>
                <Nav />
            </div>
        </header>
    )
}