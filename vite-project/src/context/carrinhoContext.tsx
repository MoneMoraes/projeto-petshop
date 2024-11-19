import { createContext, ReactNode, useState } from "react";
import { ProdutosProps } from "../pages/home";

interface CarrinhoContextData{
    carrinho: CarrinhoProps[];
    cartAmount: number;
    addItemCarrinho: (novoItem:ProdutosProps) => void;
    removerItemCarrinho: (produto:CarrinhoProps) => void;
    total: string;
}

interface CarrinhoProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CarrinhoProviderProps{
    children: ReactNode;
}

export const carrinhoContext = createContext({} as CarrinhoContextData)

function CarrinhoProvider({children}: CarrinhoProviderProps){
    const [carrinho, setCarrinho] = useState<CarrinhoProps[]>([]);
    const [total, setTotal] = useState("");

    function addItemCarrinho(novoItem: ProdutosProps){

        const indexItem = carrinho.findIndex(item => item.id === novoItem.id)

        if(indexItem !== -1){

            let carrinhoLista = carrinho;

            carrinhoLista[indexItem].amount = carrinhoLista[indexItem].amount + 1;
            carrinhoLista[indexItem].total = carrinhoLista[indexItem].amount * carrinhoLista[indexItem].price;

            setCarrinho(carrinhoLista)
            totalResultCart(carrinhoLista)
            return;
        }

        let data = {
            ...novoItem,
            amount: 1,
            total: novoItem.price
        }
        setCarrinho(produtos => [...produtos, data])
        totalResultCart([...carrinho, data])
    }

    function removerItemCarrinho(produto: CarrinhoProps){
        const indexItem = carrinho.findIndex(item => item.id === produto.id)

        if(carrinho[indexItem]?.amount > 1){
            let carrinhoLista = carrinho;

            carrinhoLista[indexItem].amount = carrinhoLista[indexItem].amount - 1;
            carrinhoLista[indexItem].total = carrinhoLista[indexItem].amount * carrinhoLista[indexItem].price;
        
            setCarrinho(carrinhoLista);
            totalResultCart(carrinhoLista);
            return;
        }

        const removeItem = carrinho.filter(item => item.id !== produto.id)
        setCarrinho(removeItem);
        totalResultCart(removeItem)
    }

    function totalResultCart(items: CarrinhoProps[]){
        let meuCart = items;
        let resultado = meuCart.reduce((acc, obj) => {return acc + obj.total}, 0)
        const resultadoFormatado = resultado.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})
        setTotal(resultadoFormatado)
    }

    return(
        <carrinhoContext.Provider
            value={{
                carrinho,
                cartAmount: carrinho.length,
                addItemCarrinho,
                removerItemCarrinho,
                total
            }}
        >
            {children}
        </carrinhoContext.Provider>
    )
} 

export default CarrinhoProvider;