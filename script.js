const form = document.getElementById('form-adicionar')
const nomes = []
const tels = []

let linhas =''

form.addEventListener('submit',function(e){
    e.preventDefault();
    aparecerHeader();
    adicionarLinha();
    atualizarTable();
})

function adicionarLinha(){
    const inputNome = document.getElementById('nome')
    const inputTel = document.getElementById('tel')
    if (tels.includes(inputTel.value)){
        alert(`O telefone: ${inputTel.value}, já foi inserido.`)
    }else{
        nomes.push(inputNome.value)
        tels.push(inputTel.value)
        let linha = `<tr>`
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputTel.value}</td>`
        linha += `</tr>`
        linhas += linha
    }
    inputNome.value = ''
    inputTel.value = ''
}

function atualizarTable(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function aparecerHeader(){
    const header = document.querySelector('thead')
    header.classList.remove('sumir')
}

