const formBusca = document.querySelector('.busca');
const campoBusca = document.querySelector('.busca__campo')
const itensCatalogo = document.querySelectorAll('.bordados')

//Verificar se o formulario de busca existe na página

if(formBusca) {
    formBusca.addEventListener('submit',function(event){
    event.preventDefault();
})
}

//Agora vamos verificar o texto que foi digitado

campoBusca.addEventListener('input', function(){

    //Converter o texto para minúsculo para facilitar a comparação
    const termoBusca = campoBusca.value.toLowerCase();
    
    //Vamos verificar todas as seções de bordados
    itensCatalogo.forEach(function(item){

        //Pegar o elemento que tem o texto do bordado
        const titulo = item.querySelector('h3').innerText.toLowerCase();

        //verificar se o termo de busca é igual ao título
        if(titulo.includes(termoBusca)){
            item.style.display = 'block'; // Mostrar o item

        }else{
            item.style.display = 'none'; // Ocultar o item
        }
    })
})