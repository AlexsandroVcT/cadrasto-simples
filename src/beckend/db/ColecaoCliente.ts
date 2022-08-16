// Estrutura básica métodos salvar
import firebase from "../../../node_modules/firebase/index";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {

    // Converte para firestore
    conversor = {
        toFirestore(cliente: Cliente) {
            return {

                nome: cliente.nome,
                idade: cliente.idade,
            }

        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options) {

        }
    }


    async salvar(cliente: Cliente): Promise<Cliente> {
        return null
    }

    async excluir(cliente: Cliente): Promise<void> {
        return null
    }
    async obterTodos(): Promise<Cliente[]> {
        return null
    }
}