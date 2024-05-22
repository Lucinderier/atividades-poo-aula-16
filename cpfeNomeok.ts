class Pessoa {
    cpf: string;

    constructor(cpf: string) {
        this.cpf = cpf;
    }
}
//metodo estatico para validação
class PessoaUtils {
    static validarCPF(cpf: string): string {
        cpf = cpf.replace(/[^\d]+/g, ''); // Remove o que não é numero

        if (cpf.length !== 11) {
            return "CPF inválido";
        }

        // Elimina CPFs inválidos conhecidos
        if (/^(\d)\1+$/.test(cpf)) {
            return "CPF inválido";
        }

        // Valida o primeiro digito
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = 11 - (soma % 11);
        let digito1 = resto === 10 || resto === 11 ? 0 : resto;

        // Valida o segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = 11 - (soma % 11);
        let digito2 = resto === 10 || resto === 11 ? 0 : resto;

        if (digito1 === parseInt(cpf.charAt(9)) && digito2 === parseInt(cpf.charAt(10))) {
            return "CPF válido";
        } else {
            return "CPF inválido";
        }
    }
}

// Ex:.
const pessoa = new Pessoa("123.456.789-09");
console.log(PessoaUtils.validarCPF(pessoa.cpf)); // vendo se é invalido

