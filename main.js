const form = document.getElementById('form-atividade');
const imgAprovado = '<img src"./imagens/aprovado.png" alt = "emoji celebrando"/>';
const imgReprovado = '<img src"./imagens/reprovado.png" alt = "emoji decepicionado"/>';
const atiVidades = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function(e) {
e.preventDefaul();

adicionaLinha();
atualizaTabela();
atualizaMediaFinal();
});

function adicionaLinha () {
const inputNomeAtividade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');  

atiVidades.push(inputNomeAtividade.value);
notas.push(inputNotaAtividade.value);

let linha = '<tr>';
linha += `<td> ${inputNomeAtividade.value}</td>`;
linha += `<td> ${inputNotaAtividade.value}</td>`;
linha += `<td> ${inputNotaAtividade.value >=7 ? imgAprovado : imgReprovado} </td>`;
linha += `</tr>`;
    
    linhas += linhas;
    

    
    inputNomeAtividade.value = " ";
    inputNotaAtividade.value = " ";
    }

    function atualizaTabela () {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linha;
    }

    function atualizaMediaFinal () {
console.log(atiVidades);
console.log(notas);
        
    }