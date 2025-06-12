let tarefas=[]
const botaoAdicionar = document.getElementById("botaoAdicionar")
botaoAdicionar.addEventListener("click", () =>{
    let descricao = document.getElementById("desc").value
    let data = document.getElementById("data").value
    let prioridade = parseInt(document.getElementById("pri").value)
    tarefas.push({
        descricao,
        data,
        prioridade
    })
    document.getElementById("desc").value=""
    document.getElementById("data").value=""
    document.getElementById("pri").value=""
})