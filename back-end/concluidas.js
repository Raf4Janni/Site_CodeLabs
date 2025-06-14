let tarefas=[]

//const botaoRefresh = document.getElementById("botaoRefresh")
//botaoRefresh.addEventListener("click", () =>{
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
//})

function listarTarefas()
{
    const tarefasConcluidas = tarefas.filter(filtrarConcluidas)
    console.log(tarefasConcluidas)
    console.log("oooi")
    tarefasConcluidas.forEach(printarTarefa)
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

        section.appendChild(div);
        div.setAttribute("id","tarefa");
        div.appendChild(pDesc);
        div.appendChild(pData);
        div.appendChild(pPriori);

        pDesc.innerText = item.descricao;
        pData.innerText = item.data;
        pPriori.innerText = item.prioridade;
        //console.log(item.descricao.value, item.data.value);
}

function filtrarConcluidas(tarefa)
{
    return tarefa.concluida == true;
}

