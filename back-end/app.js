let tarefas=[]
let id=0;

const botaoAdicionar = document.getElementById("botaoAdicionar")
botaoAdicionar.addEventListener("click", () =>{
    let descricao = document.getElementById("desc").value
    let data = document.getElementById("data").value
    let prioridade = parseInt(document.getElementById("pri").value)
    let concluida = false
    tarefas.push({
        id,
        descricao,
        data,
        prioridade,
        concluida 
    })
    id++
    document.getElementById("desc").value=""
    document.getElementById("data").value=""
    document.getElementById("pri").value=""
})

let idRecebido = 0;
const botaoAtualizar = document.getElementById("botaoEditar")
botaoAtualizar.addEventListener("click",() =>{
    let descricao = document.getElementById("desc")
    let data = document.getElementById("data")
    let prioridade = document.getElementById("pri")
    tarefas.map(tarefa =>{
        if(tarefa.id == idRecebido){
            tarefa.descricao = descricao
            tarefa.data = data
            tarefa.prioridade = prioridade
        }
        return tarefa
    })
})