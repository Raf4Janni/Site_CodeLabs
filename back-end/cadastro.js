var submit = document.getElementById("envio");
let lista = JSON.parse(window.localStorage.getItem("usuario") || "[]");
console.log(lista);
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    var email = document.getElementById("email");
    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");
    var confSenha = document.getElementById("confSenha");
    for(let item of lista){
        if(email.value == item.email){ //verifica se o email já foi cadastrado
            alert("Email já cadastrado!");
            window.location.href = "cadastro.html";
            return;
        }
    }
    if(senha.value != confSenha.value){ //verifica se as senhas conferem
        alert("As senhas não conferem!");
        window.location.href = "cadastro.html"
        
    }else if(nome.value == "" || senha.value == "" || email.value ==""){ //verifica se os campos estão preenchidos
        alert("Preencha todos os campos!");
        window.location.href = "cadastro.html"
    }
    else{// se tudo estiver correto, adiciona o usuário à lista e redireciona para a página de index
        lista.push({
            email: email.value,
            nome: nome.value,
            senha: senha.value
        });
        window.localStorage.setItem("usuario", JSON.stringify(lista));
        window.location.href = "index.html";
    }
});