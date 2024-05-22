class Monstro {
    nome: string;
    força: number;
    defesa: number;
    raridade: string;

    constructor(nome: string, força: number, defesa: number, raridade: string) {
        this.nome = nome;
        this.força = força;
        this.defesa = defesa;
        this.raridade = raridade;
    }
}

class MonstroDatabase {
    private static listaMonstros: Monstro[] = [];

    static adicionarMonstro(monstro: Monstro): void {
        const existe = this.listaMonstros.some(m => m.nome === monstro.nome);
        if (!existe) {
            this.listaMonstros.push(monstro);
            console.log(`Monstro ${monstro.nome} adicionado à database.`);
        } else {
            console.log(`Monstro ${monstro.nome} já existe na database.`);
        }
    }

    static exibirDatabase(): void {
        if (this.listaMonstros.length === 0) {
            console.log("A database de monstros está vazia.");
        } else {
            console.log("Database de Monstros:");
            this.listaMonstros.forEach(monstro => {
                console.log(`- ${monstro.nome}`);
            });
        }
    }

    static obterMonstro(nome: string): { nome: string, raridade: string } | null {
        const monstro = this.listaMonstros.find(m => m.nome === nome);
        if (monstro) {
            return { nome: monstro.nome, raridade: monstro.raridade };
        } else {
            console.log(`Monstro ${nome} não encontrado.`);
            return null;
        }
    }
}

// Exemplo de uso
const monstro1 = new Monstro("Dragão", 100, 50, "Lendário");
const monstro2 = new Monstro("Esqueleto", 30, 20, "Comum");

MonstroDatabase.adicionarMonstro(monstro1);
MonstroDatabase.adicionarMonstro(monstro2);
MonstroDatabase.adicionarMonstro(monstro1);  // Tentativa de adicionar monstro já existente

MonstroDatabase.exibirDatabase();

const monstroInfo = MonstroDatabase.obterMonstro("Dragão");
if (monstroInfo) {
    console.log(`Monstro encontrado: Nome - ${monstroInfo.nome}, Raridade - ${monstroInfo.raridade}`);
}
