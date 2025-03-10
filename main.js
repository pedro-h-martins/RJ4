export class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }
    
    get cpf() {
        return this.#cpf;
    }
    
    getNomeUpperCase() {
        return this.nome.toUpperCase();
    }
    
    getNomeLowerCase() {
        return this.nome.toLowerCase();
    }
}

export class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    
    getNumeroUpperCase() {
        return `${this.ddd} ${this.numero}`.toUpperCase();
    }
    
    getNumeroLowerCase() {
        return `${this.ddd} ${this.numero}`.toLowerCase();
    }
}

export class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
    
    getEnderecoUpperCase() {
        return `${this.rua}, ${this.numero} - ${this.cidade}, ${this.estado}`.toUpperCase();
    }
    
    getEnderecoLowerCase() {
        return `${this.rua}, ${this.numero} - ${this.cidade}, ${this.estado}`.toLowerCase();
    }
}

export class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.#cnpj = cnpj;
        this.clientes = new Set();
        this.telefones = new Set();
    }
    
    get cnpj() {
        return this.#cnpj;
    }
    
    getRazaoSocialUpperCase() {
        return this.razaoSocial.toUpperCase();
    }
    
    getRazaoSocialLowerCase() {
        return this.razaoSocial.toLowerCase();
    }
    
    getNomeFantasiaUpperCase() {
        return this.nomeFantasia.toUpperCase();
    }
    
    getNomeFantasiaLowerCase() {
        return this.nomeFantasia.toLowerCase();
    }
}
