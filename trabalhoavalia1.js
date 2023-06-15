const prompt = require("prompt-sync")({sigint: true})

/*
var nome = prompt("Digite eu nome:")
var nota = parseInt(prompt("Digite sua nota:"))

if(nota>=7){
    console.log("Aluno" +nome+ "Aprovado!")
}else{
    console.log("aluno" +nome+ "Reprovado")
} 




var nomeAluno = prompt("Coloque nome do aluno:")
var idadeAluno = prompt("Coloque a idade do aluno:")
var cursoAluno = prompt("Coloque o curso do aluno:")
var nota1Aluno = prompt("Coloque a primeira nota do aluno:")
var nota2Aluno = prompt("Coloque a segunda nota do aluno:")

console.log(" Aluno  " + nomeAluno + " tem " + idadeAluno + " anos , " + cursoAluno + 
" e suas notas foram " + nota1Aluno + " e " + nota2Aluno+ ".")

*/

const cliente = {
    NomeCliente: parseFloat(prompt("Nome do cliente:")),
    ReceitaCliente: parseFloat(prompt("Receita do cliente:")),
    DespesasCliente: parseFloat(prompt("Despesa do cliente:"))
}

var  Nomecliente = cliente.ReceitaCliente - DespesasCliente

console.log(" O cliente " +cliente.NomeCliente+ " possui saldo de " +saldocliente+ ".")
