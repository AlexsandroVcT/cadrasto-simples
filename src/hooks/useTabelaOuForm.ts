import { useState } from 'react';
// Criando meu Hooks da visibilidade

export default function useTabelaOuForm() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    // eu isolei uma lógica na minha aplicação dentro de um Hook
    return {
        formularioVisivel: visivel === 'form',
        tabelaioVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario

    }
}