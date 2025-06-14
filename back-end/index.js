let tarefas=[]


    /////// informacoes para teste ///////
    let id = 0
    let descricao = "lista de ga"
    let data = "12/6/2012"
    let prioridade = 3
    let concluida = false
    tarefas.push({
        id,
        descricao,
        data,
        prioridade,
        concluida 
    })

     descricao = "lista de calculo"
     data = "21-12-2021"
     prioridade = 1
     concluida = true
    tarefas.push({
        id,
        descricao,
        data,
        prioridade,
        concluida 
    })

    listarTarefas()


function listarTarefas()
{
    const tarefasPendentes = tarefas.filter(filtrarConcluidas)
    console.log(tarefas)
    tarefasPendentes.forEach(printarTarefa)
}

function printarTarefa(item)
{
    const section = document.getElementById("tarefas");
    const div = document.createElement("div");
        let pDesc = document.createElement("div");
        pDesc.setAttribute("id","campoTarefa");
        let pData = document.createElement("div");
        pData.setAttribute("id","campoTarefa");
        let pPriori = document.createElement("div");
        pPriori.setAttribute("id","campoTarefa");
        let checkBox = document.createElement("input")
        checkBox.setAttribute("type","checkbox")

        section.appendChild(div);
        div.setAttribute("id","tarefa");
        div.appendChild(checkBox)
        div.appendChild(pDesc);
        div.appendChild(pData);
        div.appendChild(pPriori);

        let botaoAlterar = document.createElement("a")
        botaoAlterar.setAttribute("href","editarTarefa.html")
        botaoAlterar.innerText = "editar"
        div.appendChild(botaoAlterar)

        pDesc.innerText = item.descricao;
        pData.innerText = item.data;
        pPriori.innerText = item.prioridade;
}

function filtrarConcluidas(tarefa)
{
    return tarefa.concluida == false;
}
