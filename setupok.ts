class Configuracao {
    // Propriedades estáticas
    static resolucao: string;
    static dificuldade: string;
    static raytracing: boolean;

    // Opções disponíveis
    static resolucoesDisponiveis: string[] = ['HD', 'FullHD', '2K', '4K'];
    static dificuldadesDisponiveis: string[] = ['Facil', 'Normal', 'Dificil'];
    static raytracingDisponiveis: boolean[] = [true, false];

    // Método para configurar
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

    // Método para listar as configurações atuais
    static listarConfiguracoes(): void {
        console.log(`Resolução: ${this.resolucao}`);
        console.log(`Dificuldade: ${this.dificuldade}`);
        console.log(`Raytracing: ${this.raytracing}`);
    }

    // Método para configurar usando prompt
    static configurarComPrompt(): void {
        const resolucao = prompt("Escolha a resolução (HD, FullHD, 2K, 4K):");
        if (resolucao === null) {
            console.error("Entrada de resolução inválida.");
            return;
        }

        const dificuldade = prompt("Escolha a dificuldade (Facil, Normal, Dificil):");
        if (dificuldade === null) {
            console.error("Entrada de dificuldade inválida.");
            return;
        }

        const raytracingStr = prompt("Ativar Raytracing? (true, false):");
        if (raytracingStr === null) {
            console.error("Entrada de raytracing inválida.");
            return;
        }
        const raytracing = raytracingStr === 'true';

        try {
            this.configurar(resolucao, dificuldade, raytracing);
        } catch (error: any) {
            console.error(error.message);
        }
    }
}

// Testando a classe
Configuracao.configurarComPrompt();
Configuracao.listarConfiguracoes();

