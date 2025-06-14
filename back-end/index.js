let tarefas=[]

const botaoRefresh = document.getElementById("botaoRefresh")
botaoRefresh.addEventListener("click", () =>{
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

    let descricao2 = "lista de calculo"
    let data2 = "21-12-2021"
    let prioridade2 = 1
    let concluida2 = true
    tarefas.push({
        id,
        descricao2,
        data2,
        prioridade2,
        concluida2 
    })

    listarTarefas()
})

const section = document.getElementById("tarefas");
function listarTarefas()
{
    const tarefasPendentes = tarefas.filter(filtrarConcluidas)
    console.log(tarefasPendentes)
    tarefasPendentes.forEach(printarTarefa)
    
}

function printarTarefa(item)
{
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
    return tarefa.concluida == false;
}