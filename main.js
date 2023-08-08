const form = document.getElementById('form-atividade');
const imgAprovado = '<img src"./imagens/aprovado.png" alt = "emoji celebrando"/>';
const imgReprovado = '<img src"./imagens/reprovado.png" alt = "emoji decepicionado"/>';

form.addEventListener('submit', function(e) {
e.preventDefaul();

const inputNomeAtividade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');

let linha = '<tr>';
linha += `<td> ${inputNomeAtividade.value}</td>`;
linha += `<td> ${inputNotaAtividade.value}</td>`;
linha += `<td> ${inputNotaAtividade.value >=7 ? imgAprovado : imgReprovado} </td>`;
linha += `</tr>`;

const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linha;
});