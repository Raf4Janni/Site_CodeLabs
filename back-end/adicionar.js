var usuario = JSON.parse(window.localStorage.getItem("usuarioLogado")).email;
if(usuario == null || usuario == "")
{
    window.location.href = "login.html";
}
let tarefas=JSON.parse(window.localStorage.getItem(usuario) || "[]");
const botaoAdicionar = document.getElementById("botaoAdicionar")
botaoAdicionar.addEventListener("click", () =>{
    let descricao = document.getElementById("desc").value
    let data = document.getElementById("data").value
    let prioridade = parseInt(document.getElementById("pri").value)
    let concluida = false
    tarefas.push({
        descricao,
        data,
        prioridade,
        concluida
    })
    window.localStorage.setItem(usuario, JSON.stringify(tarefas));
    window.location.href = "index.html";
})