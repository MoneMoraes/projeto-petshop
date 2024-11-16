import { Link } from "react-router-dom"
import { BiSolidCartAlt } from "react-icons/bi"

export function Header(){
    return(
        <header className="bg-orange-400/90 w-full h-12 flex justify-center items-center">
            <nav className="flex">

                <Link to="/">
                    PETLOVE
                </Link>

                <Link to="/carrinho">
                    < BiSolidCartAlt size={24} color="#121212"/>
                    <span className="absolute rounded-full bg-sky-500 w-5 px-2.5 -top-1 h-5 flex justify-center items-center text-white  ">2</span>
                </Link>
            </nav>
        </header>
    )
}