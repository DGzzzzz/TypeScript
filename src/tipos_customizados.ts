type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
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
]

alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 23,
})

const novoAluno: aluno = {
    nome: 'Douglas',
    idade: 19,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}