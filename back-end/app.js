var submit = document.getElementById("envio");

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var confSenha = document.getElementById("confSenha").value;
    if(senha != confSenha){
        alert("As senhas não conferem!");
        window.location.href = "cadastro.html"
    }else if(nome == "" || senha == ""){
        alert("Preencha todos os campos!");
        window.location.href = "cadastro.html"
    }
    else{
        window.localStorage.setItem("nome", nome);
        window.localStorage.setItem("senha", senha);
        window.location.href = "index.html"
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
