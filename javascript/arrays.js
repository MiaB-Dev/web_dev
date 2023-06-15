var funcionarios = [
    {nome: "Luiz", idade: 23},
    {nome: "Davi", idade: 56},
    {nome: "Artur", idade: 71},
    {nome: "Lucas", idade: 16},
]

var r1 = funcionarios.filter(valor => valor.nome === "Luiz");

console.log(r1)