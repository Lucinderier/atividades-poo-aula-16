// Definindo a classe Monstro
class Monstro {
    nome: string;
    forca: number;
    defesa: number;
    raridade: string;

    constructor(nome: string, forca: number, defesa: number, raridade: string) {
        this.nome = nome;
        this.forca = forca;
        this.defesa = defesa;
        this.raridade = raridade;
        // Adiciona o monstro na database se ele ainda não existe
        if (!MonstroDatabase.existeMonstro(nome)) {
            MonstroDatabase.adicionarMonstro(this);
        }
    }
}

// Definindo a classe MonstroDatabase
class MonstroDatabase {
    static listaMonstros: Monstro[] = [];

    static adicionarMonstro(monstro: Monstro): void {
        this.listaMonstros.push(monstro);
    }

    static existeMonstro(nome: string): boolean {
        return this.listaMonstros.some(monstro => monstro.nome === nome);
    }

    static exibirDatabase(): void {
        console.log("Lista de Monstros:");
        this.listaMonstros.forEach(monstro => {
            console.log(monstro.nome);
        });
    }

    static retornarNomeERaridade(nome: string): {nome: string, raridade: string} | undefined {
        const monstro = this.listaMonstros.find(monstro => monstro.nome === nome);
        if (monstro) {
            return { nome: monstro.nome, raridade: monstro.raridade };
        }
        return undefined;
    }
}

// Exemplo de uso:
const monstro1 = new Monstro("Dragão", 90, 70, "Raro");
const monstro2 = new Monstro("Goblin", 40, 30, "Comum");
const monstro3 = new Monstro("Fênix", 85, 60, "Épico");

// Exibindo a database
MonstroDatabase.exibirDatabase();

// Retornando nome e raridade de um monstro
const infoMonstro = MonstroDatabase.retornarNomeERaridade("Fênix");
if (infoMonstro) {
    console.log(`Nome: ${infoMonstro.nome}, Raridade: ${infoMonstro.raridade}`);
} else {
    console.log("Monstro não encontrado.");
}
