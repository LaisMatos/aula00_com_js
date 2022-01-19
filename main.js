/*var nome="lais"
    nome=123

    console.log(nome);*/

/*var nota =8;
    if(nota>=5){
        var mensagem="aprovado";
    }
    console.log(mensagem);*/

const titulo= document.getElementById('titulo');
const nome= document.getElementById('nome');

const vermelho= document.getElementById('vermelho');
const azul= document.getElementById('azul');
const verde= document.getElementById('verde');



function trocarVermelho(){
    titulo.textContent = nome.value;
    titulo.classList.add('vermelho');
 
}
function trocarAzul(){
    titulo.textContent = nome.value;
    titulo.classList.add('azul');
}

function trocarVerde(){
    titulo.textContent = nome.value;
    titulo.classList.add('verde');
}


//ação para acessar o conteúdo do título
vermelho.addEventListener('click',trocarVermelho); 
azul.addEventListener('click',trocarAzul); 
verde.addEventListener('click',trocarVerde); 