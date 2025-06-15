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
        for(let item of lista){
            if(item.email == nome.value && item.senha == senha.value){
                window.location.href = "index.html";
                flag =1;
                window.localStorage.setItem("usuarioLogado", JSON.stringify(item));
                break;
            } 
        }
        if(flag==0){
            alert("Usuário ou senha incorretos!");
            nome.setAttribute("style", "background-color: #F78C8C; color: white;");
            senha.setAttribute("style", "background-color: #F78C8C;");
        }
    }
});