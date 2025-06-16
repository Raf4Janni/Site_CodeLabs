//Verifica se o usuario esta logado, se nao estiver redireciona para a pagina de login
var usuario = JSON.parse(window.localStorage.getItem("usuarioLogado"));
if(usuario == null || usuario == "")
{
    window.location.href = "login.html";
}
let tarefas=JSON.parse(window.localStorage.getItem(usuario.email) || "[]"); // pega as tarefas do usuario logado se nao existir cria um array vazio
tarefas.sort(function(a, b){return b.prioridade - a.prioridade}); // ordena por prioridade
//const botaoRefresh = document.getElementById("botaoRefresh")
//botaoRefresh.addEventListener("click", () =>{

    /////// informacoes para teste ///////

    listarTarefas()


function listarTarefas()
{
    const tarefasPendentes = tarefas.filter(filtrarConcluidas)
    console.log(tarefas)
    tarefasPendentes.forEach(printarTarefa)
}

function printarTarefa(item)
{
    const section = document.getElementById("tarefas"); //cria uma nova seção para cada tarefa
    const div = document.createElement("div");
        let pDesc = document.createElement("div");
        pDesc.setAttribute("class","campoTarefa");
        let pData = document.createElement("div");
        pData.setAttribute("class","campoTarefa");
        let pPriori = document.createElement("div");
        pPriori.setAttribute("class","campoTarefa");
        let checkBox = document.createElement("input")
        checkBox.setAttribute("type","checkbox")
        //função para apagar a tarefa da página de index quando for concluída
        checkBox.addEventListener("click", ()=>{
            if(checkBox.checked == true)
            {
                var indice =  tarefas.findIndex(
                    tarefa => tarefa.descricao === item.descricao && tarefa.data === item.data && tarefa.prioridade === item.prioridade
                )
                tarefas[indice].concluida = true; // altera o status da tarefa para concluída
                window.localStorage.setItem(usuario, JSON.stringify(tarefas));
                section.removeChild(div); //apaga a seção 
            }  
        })

        section.appendChild(div);
        div.setAttribute("id","tarefa");
        div.appendChild(checkBox)
        div.appendChild(pDesc);
        div.appendChild(pData);
        div.appendChild(pPriori);

        let botaoAlterar = document.createElement("a")
        botaoAlterar.setAttribute("href","editarTarefa.html")
        botaoAlterar.innerText = "editar"
        botaoAlterar.addEventListener("click", ()=>{
            window.localStorage.setItem("tarefaSelecionada", JSON.stringify(item));
        })
        div.appendChild(botaoAlterar)

        pDesc.innerText = item.descricao;
        pData.innerText = item.data;
        pPriori.innerText = item.prioridade;
}

 // função para filtrar as tarefas não concluídas
function filtrarConcluidas(tarefa)
{
    return tarefa.concluida == false;
}

//Encerra a sessão do usuário
var btn = document.getElementById("btn-sair");
btn.addEventListener("click", ()=>{
    window.localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
})
