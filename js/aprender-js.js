/*
//Banco de dados
const nomeUsuario1 = "user1@gmail.com"
const senhaUsuario1 = "123456"
const nomeUsuario2 = "user2@gmail.com"
const senhaUsuario2 = "123456"

//Variáveis de Login
let nomeDigitado = prompt("Digite seu email:")
let senhaDigitada = prompt("Digite sua senha:")

//Verificação de Login
if (nomeDigitado === nomeUsuario1 && senhaDigitada === senhaUsuario1)
{
    alert("Login bem-sucedido! Bem-vindo, " + nomeUsuario1 + "!")
} else if (nomeDigitado === nomeUsuario2 && senhaDigitada === senhaUsuario2) 
{
    alert("Login bem-sucedido! Bem-vindo, " + nomeUsuario2 + "!")
} else 
{
    alert("Login falhou! Email ou senha incorretos.")
    document.body.classList.add("acesso-negado")
}



//Variáveis de Login
let cumprimento = prompt("Oi! Como você está?!")
let nome = prompt("Qual o seu nome?")
let localizacao = prompt("De onde você é?")
let idade = prompt("Qual a sua idade?")


//Verificação de Login
if (idade >= 18)
{
    alert("Bem-vindo, " + nome + "!")
} else 
{
    alert("Me desculpe, essa pagina não pode ser acessada por você.")
    document.body.classList.add("acesso-negado")
    document.getElementById("banner__image").src = "Img/acesso-negado-img.png"
}
*/