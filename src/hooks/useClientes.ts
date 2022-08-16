import { useEffect } from 'react';
import { useState } from 'react';
import ColecaoCliente from '../beckend/db/ColecaoCliente';

import Cliente from "../core/Cliente"
import ClienteRepositorio from '../core/ClienteRepositorio';
import useTabelaOuForm from './useTabelaOuForm';

// Criando o pripo exemplo de Hooks
export default function useCliente() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaioVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    // Inicializar o componente
    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()

        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()

    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()

    }
    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaioVisivel,
        exibirTabela
    }
}