
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import doguinho from '../../assets/doguinho.png'
import { BsCartPlus } from "react-icons/bs"
import { useContext } from "react"

import { carrinhoContext } from "../../context/carrinhoContext"


export interface ProdutosProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home(){
    const [produtos, setProdutos] = useState<ProdutosProps[]>([])
    const {addItemCarrinho} = useContext(carrinhoContext)

    useEffect(() => {
        async function obterProdutos(){
            const resposta = await api.get("/products")
            setProdutos(resposta.data)
        }

        obterProdutos();
    }, [])

    function AdicionarItemCart(produtos: ProdutosProps){
        addItemCarrinho(produtos)
    }



    return(
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                
                <h1 className="font-bold text-2xl mb-4 mt-20 text-center">Produtos Especias para o seu Pet
                    <img src={doguinho} alt="foto de cachorro" />
                </h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    {produtos.map((produto) => (
                        <section>
                            <img
                                src={produto.cover} 
                                alt={produto.title}
                            />

                            <p className="font-medium mt-1 mb-2">{produto.title}</p>
                            <strong>{produto.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })}                            
                            </strong>
                            <button onClick={() => AdicionarItemCart(produto)}>
                                <BsCartPlus size={20}/>
                            </button>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    )
}