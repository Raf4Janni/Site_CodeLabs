//Verificação para ver se o usuário está logad
var usuario = JSON.parse(window.localStorage.getItem("usuarioLogado"));
if(usuario == null || usuario == "")
{
    window.location.href = "login.html"; // se não estiver logado volta ao login
}


let tarefas=JSON.parse(window.localStorage.getItem(usuario.email) || "[]"); //leitura das tarefas já adicioandas, se não houver nenhuma, é um array vazio
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
    window.localStorage.setItem(usuario.email, JSON.stringify(tarefas)); // salva as tarefas no localStorage de acordo com o email do usuário
})

//Encerra a sessão do usuário
var btn = document.getElementById("btn-sair");
btn.addEventListener("click", ()=>{
    window.localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
})