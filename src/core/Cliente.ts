// Nossa class que vai representar o cliente

export default class Cliente {
    #id: string
    #nome: string
    #idade: number

    constructor(nome: string, idade: number, id: string = null) {
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }
    // Criando um componente vazio
    static vazio() {
        return new Cliente('', 0)
    }

    get id() {
        return this.#id
    }
    get nome() {
        return this.#nome
    }
    get idade() {
        return this.#idade
    }
}