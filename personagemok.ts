class Personagem {
    nome: string;
    hp: number;
    mp: number;
    forca: number;
    defesa: number;
    agilidade: number;

    static readonly MAGO = "Mago";
    static readonly GUERREIRA = "Guerreira";
    static readonly ASSASSINO = "Assassino";
    static readonly ARQUEIRO = "Arqueiro";

    constructor(nome: string, tipo: string) {
        this.nome = nome;
        this.hp = 100;
        this.mp = 70;
        this.forca = 60;
        this.defesa = 40;
        this.agilidade = 25;

        this.aplicarBuff(tipo);
    }

    aplicarBuff(tipo: string): void {
        switch (tipo) {
            case Personagem.MAGO:
                this.mp += 30;
                break;
            case Personagem.GUERREIRA:
                this.hp += 30;
                this.forca += 15;
                break;
            case Personagem.ASSASSINO:
                this.agilidade += 15;
                break;
            case Personagem.ARQUEIRO:
                this.agilidade += 5;
                this.forca += 7;
                this.hp += 5;
                break;
            default:
                throw new Error("Tipo de personagem desconhecido.");
        }
    }
}

function criarPersonagem(): Personagem {
    const nome = prompt("Informe o nome do personagem:");
    if (nome === null || nome.trim() === "") {
        throw new Error("Nome do personagem não pode ser vazio.");
    }

    let tipo: string | null = prompt("Selecione o tipo do personagem (Mago, Guerreira, Assassino, Arqueiro):");
    // Verificar se o tipo é válido
    while (tipo === null || ![Personagem.MAGO, Personagem.GUERREIRA, Personagem.ASSASSINO, Personagem.ARQUEIRO].includes(tipo)) {
        tipo = prompt("Tipo inválido. Selecione o tipo do personagem (Mago, Guerreira, Assassino, Arqueiro):");
    }

    return new Personagem(nome, tipo);
}

// Criar personagem 
const personagem = criarPersonagem();
console.log(personagem);
