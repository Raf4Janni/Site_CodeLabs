var usuario = JSON.parse(window.localStorage.getItem("usuarioLogado")).email;
if(usuario == null || usuario == "")
{
    window.location.href = "login.html";
}
let tarefas = JSON.parse(window.localStorage.getItem(usuario));
//let idRecebido = 0;
let lista = JSON.parse(window.localStorage.getItem("tarefaSelecionada")) || "";
const botaoAtualizar = document.getElementById("botaoEditar")
document.getElementById("desc").value = lista.descricao
document.getElementById("data").value = lista.data
document.getElementById("pri").value = lista.prioridade
console.log(window.localStorage.getItem("tarefaSelecionada"));
botaoAtualizar.addEventListener("click",() =>{
    let descricao = document.getElementById("desc").value;
    let data = document.getElementById("data").value;
    let prioridade = document.getElementById("pri").value;
    var indice = tarefas.findIndex(tarefa =>
        tarefa.descricao === lista.descricao && tarefa.data === lista.data && tarefa.prioridade === lista.prioridade
    )
    tarefas[indice] = {
        descricao,
        data,
        prioridade: prioridade,
        concluida: false
    }
    window.localStorage.setItem(usuario, JSON.stringify(tarefas));
    window.location.href = "index.html";
});