// Variáveis para controlar Animação do Personagem/Obstacle
const personagem = document.querySelector('#personagem')
const obstacle = document.querySelector('#obstacle')

// Movimentação do Personagem
function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }
    
    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 400)
}

//Colisão dos Objetos
const testarColisao = setInterval(function(){
const ladosPersonagem = personagem.getBoundingClientRect()
const ladosObstacle = obstacle.getBoundingClientRect()

//Colosão entre Personagem e Object
if (!(ladosPersonagem.bottom < ladosObstacle.top || ladosPersonagem.top > ladosObstacle.bottom ||
      ladosPersonagem.right < ladosObstacle.left || ladosPersonagem.left > ladosObstacle.right)){

    obstacle.style.animation = 'none'  
    obstacle.style.display = 'none'
    setTimeout(() => {window.alert('gameOver')
        
    }, 20);
}
})
