//verifica se o usuário está logado
var usuario = JSON.parse(window.localStorage.getItem("usuarioLogado"));
if(usuario == null || usuario == "")
{
    window.location.href = "login.html";
}
let tarefas=JSON.parse(window.localStorage.getItem(usuario.email) || "[]");
//const botaoRefresh = document.getElementById("botaoRefresh")
//botaoRefresh.addEventListener("click", () =>{

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
        pDesc.setAttribute("class","campoTarefa");
        let pData = document.createElement("div");
        pData.setAttribute("class","campoTarefa");
        let pPriori = document.createElement("div");
        pPriori.setAttribute("class","campoTarefa");
        let checkBox = document.createElement("input")
        checkBox.setAttribute("type","checkbox")
        checkBox.setAttribute("class","ckbox")
        checkBox.checked = true
        //função para apagar a tarefa da página de index quando for concluída
        checkBox.addEventListener("click", ()=>{
            if(checkBox.checked == false)
            {
                var indice =  tarefas.findIndex(
                    tarefa => tarefa.descricao === item.descricao && tarefa.data === item.data && tarefa.prioridade === item.prioridade
                )
                tarefas[indice].concluida = false; // altera o status da tarefa para concluída
                window.localStorage.setItem(usuario.email, JSON.stringify(tarefas));
                /*section.animate(
                    [
                        { transform: "translateX(0px)" },
                        { transform: "translateX(500px)"}
                    ],
                    {
                        duration: 1000,
                        iterations: 1,
                    },
                )*/
                section.removeChild(div); //apaga a seção 
            }  
        })

        section.appendChild(div);
        div.setAttribute("id","tarefa");
        div.appendChild(checkBox)
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


//Encerrar sessão do usuário
var btn = document.getElementById("btn-sair");
btn.addEventListener("click", ()=>{
    window.localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
})

