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