import { useState, useEffect, useContext } from "react"
import { api } from "../../services/api"
import { ProdutosProps } from "../home"
import { BsCartPlus } from "react-icons/bs"
import { useParams, useNavigate } from "react-router-dom"
import { carrinhoContext } from "../../context/carrinhoContext"
import toast from "react-hot-toast"

export function Detalhes(){
    const [produto, setProduto] = useState<ProdutosProps>()
    const {id} = useParams();
    const {addItemCarrinho} = useContext(carrinhoContext)
    const navigate = useNavigate();

    useEffect(() => {
        async function obterProduto(){
            const resposta = await api.get(`/products/${id}`)
            setProduto(resposta.data)
        }

        obterProduto()
    }, [id])

    function adicionarItem(produto: ProdutosProps){
        toast.success("Pedido adicionado no carrinho",{
            style:{
                borderRadius: 10,
                backgroundColor: "#121212",
                color: "#fff"
            }
        })
        addItemCarrinho(produto)
        navigate("/carrinho")
    }

    return(
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto my-6 pt-10">
                {produto && (
                    <section className="w-full">
                        <div className="flex flex-col lg:flex-row">
                            <img
                                className="flex-1 w-full max-h-72 object-contain"
                                src={produto?.cover}
                                alt={produto?.title} 
                            />

                            <div className="flex 1 flex flex-col">
                                <p className="font-bold text-2xl mt-4 mb-2">{produto.title}</p>
                                <p className="my-4">{produto.description}</p>
                                <strong className="text-zinc-700/90 text-xl">
                                    {produto.price.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </strong>
                                <button
                                className="bg-zinc-900 p-1 rounded w-7"
                                onClick={() => adicionarItem(produto)}
                                >                                
                                    <BsCartPlus size={20} color="#ffff"/>
                                </button>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    )
}