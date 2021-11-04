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
    }, 400)

  /* const topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top'))
        topoPersonagem = 90*/
}

//Colisão dos Objetos
const testarColisao = setInterval(function(){

/*const topoPersonagem = parseInt(
    window.getComputedStyle(personagem).getPropertyValue('top')
)
const esquerdaObstacle = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue('left')
)*/

const ladosPersonagem = personagem.getBoundingClientRect()
const ladosObstacle = obstacle.getBoundingClientRect()
console.log(ladosPersonagem)
console.log(ladosObstacle)

if (!(ladosPersonagem.bottom < ladosObstacle.top || ladosObstacle.top > ladosPersonagem.bottom ||
      ladosPersonagem.right < ladosObstacle.left || ladosObstacle.left > ladosPersonagem.right)){

    obstacle.style.animation = 'none'  
    obstacle.style.display = 'none'
    alert('GameOver')
}
})

