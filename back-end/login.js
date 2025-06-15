//verifica se o usuário está logado
var usuario = JSON.parse(window.localStorage.getItem("usuarioLogado"));
if(usuario)
{
    window.location.replace("index.html");
}
let lista = JSON.parse(localStorage.getItem("usuario") || "[]");
console.log(lista);
var flag =0;
var submit = document.getElementById("envio");
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");
    if(nome.value == "" || senha.value == ""){
        alert("Preencha todos os campos!");
        window.location.href = "login.html"
    }
    else{
        for(let item of lista){ //poderia ser feito com findIndex, descobri essa função depois
            if(item.email == nome.value && item.senha == senha.value){ //verifica se o usuário foi cadastrado
                window.location.href = "index.html";
                flag =1;
                window.localStorage.setItem("usuarioLogado", JSON.stringify(item));// armazena o usuário logado
                break;
            } 
        }
        if(!flag){// tratamento para caso o usuário não seja encontrado
            alert("Usuário ou senha incorretos!");
            nome.setAttribute("style", "background-color: #F78C8C; color: white;");
            senha.setAttribute("style", "background-color: #F78C8C;");
        }
    }
});