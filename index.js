import { Cliente, Telefone, Endereco, Empresa } from "./main.js";

const enderecoEmpresa = new Endereco("SP", "São Paulo", "Av. Paulista", 1300);
const empresa = new Empresa("Zacarias Ltda.", "Zaca", "12345678000190", enderecoEmpresa);

const telefone1 = new Telefone("11", "98765-4321");
const telefone2 = new Telefone("11", "12345-6789");
empresa.telefones.add(telefone1);
empresa.telefones.add(telefone2);

const clientes = [
    new Cliente("João", "12345678900", 
        new Endereco("SP", "São Paulo", "Rua Almiranda", 111)), 
        new Telefone("11", "1111-1111"),
    new Cliente("Maria", "98765432100", 
        new Endereco("RJ", "Rio de Janeiro", "Rua Costa", 202)), 
        new Telefone("21", "2222-2222"),
    new Cliente("Carlos", "45678912300", 
        new Endereco("SP", "São José dos Campos", "Rua Ciranda", 303)), 
        new Telefone("12", "3333-3333"),
    new Cliente("Ana", "32165498700", 
        new Endereco("RS", "Porto Alegre", "Rua Arbusto", 304)), 
        new Telefone("51", "4444-4444"),
    new Cliente("Douglas", "78912345600", 
        new Endereco("PR", "Curitiba", "Rua Colinas", 505)), 
        new Telefone("41", "5555-5555"),
];

console.log(empresa);
