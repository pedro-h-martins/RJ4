import { Cliente, Telefone, Endereco, Empresa } from "./main.js";

const enderecoEmpresa = new Endereco("SP", "São Paulo", "Av. Paulista", 1300);
const empresa = new Empresa("Zacarias LTDA", "Zaca", "12345678000190", enderecoEmpresa);

const telefone1 = new Telefone("11", "98765-4321");
const telefone2 = new Telefone("11", "12345-6789");
empresa.telefones.add(telefone1);
empresa.telefones.add(telefone2);

const clientes = [];

let cliente = new Cliente("João", "12345678900", 
    new Endereco("SP", "São Paulo", "Rua Almiranda", 111));
cliente.telefones.add(new Telefone("11", "1111-1111"));
cliente.telefones.add(new Telefone("11", "1100-1100"));
clientes.push(cliente);

cliente = new Cliente("Maria", "98765432100", 
    new Endereco("RJ", "Rio de Janeiro", "Rua Costa", 202));
cliente.telefones.add(new Telefone("21", "2222-2222"));
cliente.telefones.add(new Telefone("21", "2200-2200"));
clientes.push(cliente);

cliente = new Cliente("Carlos", "45678912300", 
    new Endereco("SP", "São José dos Campos", "Rua Ciranda", 303));
cliente.telefones.add(new Telefone("12", "3333-3333"));
cliente.telefones.add(new Telefone("12", "3300-3300"));
clientes.push(cliente);

cliente = new Cliente("Ana", "32165498700", 
    new Endereco("RS", "Porto Alegre", "Rua Arbusto", 304));
cliente.telefones.add(new Telefone("51", "4444-4444"));
cliente.telefones.add(new Telefone("51", "4400-4400"));
clientes.push(cliente);

cliente = new Cliente("Douglas", "78912345600", 
    new Endereco("PR", "Curitiba", "Rua Colinas", 505));
cliente.telefones.add(new Telefone("41", "5555-5555"));
cliente.telefones.add(new Telefone("41", "5500-5500"));
clientes.push(cliente);

clientes.forEach(cliente => empresa.addCliente(cliente));
console.log(empresa.detalhe());
