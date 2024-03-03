"use strict";
const alunos = [
    {
        nome: 'Carlos',
        cursos: ['Front-ent', "UX/UI"],
        idade: 27,
    },
    {
        nome: 'Ana',
        cursos: ['Front-ent', "Python"],
        idade: 24,
    },
];
alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 23,
});
const novoAluno = {
    nome: 'Douglas',
    idade: 19,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
