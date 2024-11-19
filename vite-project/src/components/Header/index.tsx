import { Link } from "react-router-dom"
import { BiSolidCartAlt } from "react-icons/bi"
import { useContext } from "react"

import { carrinhoContext } from "../../context/carrinhoContext"


export function Header(){
    const {cartAmount} = useContext(carrinhoContext)

    return(
        <header className="bg-orange-400 w-full h-12 flex justify-center items-center shadow-xl fixed top-0">
            <nav className="flex">

                

                <Link to="/">
                    PETLOVE
                </Link>

                <Link to="/carrinho">
                    < BiSolidCartAlt size={24} color="#121212"/>
                    
                    {cartAmount !== 0 && (<span className="absolute rounded-full bg-sky-500 w-5 px-2.5 -top-1 h-5 flex justify-center items-center text-white  ">{cartAmount}</span>)}
                </Link>
            </nav>
        </header>
    )
}