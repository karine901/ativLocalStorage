// Array para armazenar os alunos temporariamente
let alunos = [];
 
// Função para cadastrar um aluno
function cadastrarAluno() {
    const nome = document.getElementById('nome').value;
    const curso = document.getElementById('curso').value;
    const anoConclusao = document.getElementById('anoConclusao').value;
 
    if (nome && curso && anoConclusao) {
        const aluno = { nome, curso, anoConclusao };
        alunos.push(aluno); // Adiciona o novo aluno ao array
        alert("Aluno cadastrado com sucesso!");
        limparFormulario();
        mostrarTodosAlunos();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
 
// Função para mostrar todos os alunos
function mostrarTodosAlunos() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
 
    if (alunos.length === 0) {
        resultado.innerHTML = "<p>Nenhum aluno cadastrado.</p>";
    } else {
        alunos.forEach((aluno, index) => {
            resultado.innerHTML += `
                <div class="result-item">
                    <p><strong>Nome:</strong> ${aluno.nome}</p>
                    <p><strong>Curso:</strong> ${aluno.curso}</p>
                    <p><strong>Ano de Conclusão:</strong> ${aluno.anoConclusao}</p>
                    <button onclick="atualizarAluno(${index})">Atualizar</button>
                    <button onclick="removerAluno(${index})">Remover</button>
                </div>
            `;
        });
    }
}
 
// Função para buscar um aluno específico pelo nome
function mostrarAluno() {
    const nomeBusca = document.getElementById('buscaNome').value.toLowerCase();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
 
    const aluno = alunos.find(aluno => aluno.nome.toLowerCase() === nomeBusca);
 
    if (aluno) {
        resultado.innerHTML = `
            <div class="result-item">
                <p><strong>Nome:</strong> ${aluno.nome}</p>
                <p><strong>Curso:</strong> ${aluno.curso}</p>
                <p><strong>Ano de Conclusão:</strong> ${aluno.anoConclusao}</p>
            </div>
        `;
    } else {
        resultado.innerHTML = "<p>Aluno não encontrado.</p>";
    }
}
 
// Função para atualizar os dados de um aluno específico
function atualizarAluno(index) {
    const aluno = alunos[index];
    const novoNome = prompt("Atualize o Nome:", aluno.nome);
    const novoCurso = prompt("Atualize o Curso:", aluno.curso);
    const novoAnoConclusao = prompt("Atualize o Ano de Conclusão:", aluno.anoConclusao);
 
    if (novoNome && novoCurso && novoAnoConclusao) {
        alunos[index] = { nome: novoNome, curso: novoCurso, anoConclusao: novoAnoConclusao };
        alert("Dados do aluno atualizados!");
        mostrarTodosAlunos();
    } else {
        alert("Todos os campos devem ser preenchidos.");
    }
}
 
// Função para remover um aluno específico
function removerAluno(index) {
    alunos.splice(index, 1);
    alert("Aluno removido com sucesso!");
    mostrarTodosAlunos();
}
 
// Função para limpar o formulário de entrada
function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('curso').value = '';
    document.getElementById('anoConclusao').value = '';
}