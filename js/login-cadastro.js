const FORM_CADASTRAR = document.getElementById("form-cadastrar")
if(FORM_CADASTRAR){

    FORM_CADASTRAR.addEventListener("submit", function(event){
        event.preventDefault()

        const usuario = {
            nome : document.getElementById("nome").value, 
            sobrenome : document.getElementById("sobrenome").value,
            email : document.getElementById("email").value,
            senha : document.getElementById("senha").value,
            ddd : document.getElementById("ddd").value,
            telefone : document.getElementById("telefone").value,
            endereco : document.getElementById("endereco").value,
            numero : document.getElementById("numero").value,
            cidade : document.getElementById("cidade").value,
            cep : document.getElementById("cep").value,
            dataNascimento : document.getElementById("data-nascimento").value,
            genero : document.getElementById("genero").selectedOpitions[0].text,

        }
        localStorage.setItem("usuarioCadastro", JSON.stringify(usuario))
        alert("Cadastro Realizado com SUCESSO!")
        window.location.href="login.html"

    })

}
const FORM_LOGIN = document.getElementById("form-logar")

if (FORM_LOGAR){
    FORM_LOGAR.addEventListener("submit", function(event){
        event.preventDefault()
        const usuarioCadastro = localStorage.getIem("usuarioCadastro")

        if (usuarioCadastro){
            const usuarioEncontrado = JSON.parse(usuarioCadastro)
            var emailDigitado = document.getElementById("email").value
            var senhaDigitado = document.getElementById("senha").value

            if( emailDigitado == usuarioEncontrado.email && senhaDigitada == usuarioEncontrado.senha){
                alert("Usuário Logado com Sucesso")
                window.location.href = "index.html"
                } else {
                    alert("ATENÇÃO: Email ou Senha Incorretos")
                }

        }else{
            alert("Nenhum usuário cadastrado encontrado")
        }
    })
}