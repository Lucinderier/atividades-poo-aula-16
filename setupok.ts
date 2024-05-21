class Setup {
    // estaticos
    static resolucao: string;
    static dificuldade: string;
    static raytracing: boolean;

    //as opçoes
    static resolucoesDisponiveis: string[] = ['HD', 'FullHD', '2K', '4K'];
    static dificuldadesDisponiveis: string[] = ['Facil', 'Normal', 'Dificil'];
    static raytracingDisponiveis: boolean[] = [true, false];

    // metodo
    static configurar(resolucao: string, dificuldade: string, raytracing: boolean): void {
        if (this.resolucoesDisponiveis.includes(resolucao)) {
            this.resolucao = resolucao;
        } else {
            throw new Error("Resolução inválida. Opções disponíveis: " + this.resolucoesDisponiveis.join(", "));
        }

        if (this.dificuldadesDisponiveis.includes(dificuldade)) {
            this.dificuldade = dificuldade;
        } else {
            throw new Error("Dificuldade inválida. Opções disponíveis: " + this.dificuldadesDisponiveis.join(", "));
        }

        if (this.raytracingDisponiveis.includes(raytracing)) {
            this.raytracing = raytracing;
        } else {
            throw new Error("Valor de raytracing inválido. Opções disponíveis: " + this.raytracingDisponiveis.join(", "));
        }
    }

    //listar as configuraçoes atuais
    static listarConfiguracoes(): void {
        console.log(`Resolução: ${this.resolucao}`);
        console.log(`Dificuldade: ${this.dificuldade}`);
        console.log(`Raytracing: ${this.raytracing}`);
    }

    // metodo para configurar usando prompt
    static configurarComPrompt(): void {
        const resolucao = prompt("Escolha a resolução (HD, FullHD, 2K, 4K):");
        const dificuldade = prompt("Escolha a dificuldade (Facil, Normal, Dificil):");
        const raytracing = prompt("Ativar Raytracing? (true, false):") === 'true';

        try {
            this.configurar(resolucao, dificuldade, raytracing);
        } catch (error) {
            console.error(error.message);
        }
    }
}





