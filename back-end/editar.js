//verifica se o usuário está logado
var usuario = JSON.parse(window.localStorage.getItem("usuarioLogado"));
if(usuario == null || usuario == "")
{
    window.location.href = "login.html";
}
let tarefas = JSON.parse(window.localStorage.getItem(usuario.email));
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
    //procura o índeice da array tarefas que contém as mesmas informações da tarefa selecionada
    var indice = tarefas.findIndex(tarefa =>
        tarefa.descricao === lista.descricao && tarefa.data === lista.data && tarefa.prioridade === lista.prioridade
    )
    //altera a tarefa selecionada com as novas informações
    tarefas[indice] = {
        descricao,
        data,
        prioridade: prioridade,
        concluida: false
    }
    window.localStorage.setItem(usuario, JSON.stringify(tarefas));
    window.location.href = "index.html";
});

//Encerra sessão do usuário
var btn = document.getElementById("btn-sair");
btn.addEventListener("click", ()=>{
    window.localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
})