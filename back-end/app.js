var submit = document.getElementById("envio");
var form = document.getElementsByTagName("form");
submit.addEventListener("click", ()=>{
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var confSenha = document.getElementById("confSenha").value;
    if(senha != confSenha){
        alert("As senhas não conferem!");
        location.href = "http://127.0.0.1:5500/front-end/html/cadastro.html"
    }else if(nome == "" || senha == ""){
        alert("Preencha todos os campos!");
        location.href = "http://127.0.0.1:5500/front-end/html/cadastro.html"
    }
    else{
        window.localStorage.setItem("nome", nome);
        window.localStorage.setItem("senha", senha);
        location.href = "http://127.0.0.1:5500/front-end/html/index.html"
    }
});






let tarefas=[]
let id=0;
const botaoAdicionar = document.getElementById("botaoAdicionar")
botaoAdicionar.addEventListener("click", () =>{
    let descricao = document.getElementById("desc").value
    let data = document.getElementById("data").value
    let prioridade = parseInt(document.getElementById("pri").value)
    tarefas.push({
        id,
        descricao,
        data,
        prioridade
    })
    id++
    document.getElementById("desc").value=""
    document.getElementById("data").value=""
    document.getElementById("pri").value=""
})
