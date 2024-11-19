import { useContext } from "react";

import { carrinhoContext } from "../../context/carrinhoContext";
import { Link } from "react-router-dom";

export function Carrinho(){
    const {carrinho, total, addItemCarrinho, removerItemCarrinho} = useContext (carrinhoContext)

    return(
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4 pt-16">Meu Carrinho</h1>


            {carrinho.map((item) => (
                <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
                    <img
                        className="w-28"
                        src={item.cover}
                        alt={item.title}
                    />

                    <strong>{item.price}</strong>

                    <div className="flex items-center justify-center gap-3">
                        <button
                            onClick={() => removerItemCarrinho(item)}
                            className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
                        >
                            -
                        </button>

                        {item.amount}

                        <button
                            onClick={() => addItemCarrinho(item)}
                            className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
                        >
                            +
                        </button>
                    </div>

                    <strong>
                        Subtotal: {item.total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </strong>
                </section>
            ))}

                {carrinho.length !== 0 && <p className="font-bold mt-4">Total: {total}</p>}
        </div>
    )
}