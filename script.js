// Variáveis para controlar Animação do Personagem/Obstacle
let personagem = document.querySelector('#personagem')
let obstacle = document.querySelector('#obstacle')

// Movimentação do Personagem
function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }
    
    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
}

