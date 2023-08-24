let jogador = "O"
const btns = document.getElementsByClassName('btn')
const tituloDoJogador = document.getElementsByClassName('currentPlayer')[0]
let jogadas = 0

async function jogadorJogou(btn) {

    btn = btn.target

    addJogada(btn)

    function addJogada(btn) {

        if (btn.innerHTML == " ") {

            btn.innerHTML = jogador
            jogadas++
            setTimeout ( () => {
                verificaVitoriasOuVelha()
                alteraJogador()
                alteraTituloDoJogador()
            } , 100)

        }

        function verificaVitoriasOuVelha(){

            if ( 
    
                btns[0].innerHTML === btns[1].innerHTML && btns[0].innerHTML === btns[2].innerHTML && btns[0].innerHTML !== " " ||
                btns[3].innerHTML === btns[4].innerHTML && btns[3].innerHTML === btns[5].innerHTML && btns[3].innerHTML !== " " ||
                btns[6].innerHTML === btns[7].innerHTML && btns[6].innerHTML === btns[8].innerHTML && btns[6].innerHTML !== " " ||
    
                btns[0].innerHTML === btns[3].innerHTML && btns[0].innerHTML === btns[6].innerHTML && btns[0].innerHTML !== " " ||
                btns[1].innerHTML === btns[4].innerHTML && btns[1].innerHTML === btns[7].innerHTML && btns[1].innerHTML !== " " ||
                btns[2].innerHTML === btns[5].innerHTML && btns[2].innerHTML === btns[8].innerHTML && btns[2].innerHTML !== " " ||
    
                
                btns[0].innerHTML === btns[4].innerHTML && btns[0].innerHTML === btns[8].innerHTML && btns[0].innerHTML !== " " ||
                btns[2].innerHTML === btns[4].innerHTML && btns[2].innerHTML === btns[6].innerHTML && btns[2].innerHTML !== " "
    
               ){
    
                alguemGanhou()
    
            }else if (jogadas === 9){
    
                deuVelha()
    
            }
    
            function alguemGanhou() {
                
                mensagemDeVitoria()
                iniciaJogo()
    
                function mensagemDeVitoria(){
                    
                    window.alert(`
                                ----------------# WINNER :) #-----------
                                               O jogador ${jogador} venceu!
                                -------------------------------------------
                    `);
        
                }
            }
    
            function deuVelha() {
                
                mensagemDeVelha()
                iniciaJogo()
    
                function mensagemDeVelha(){
                    
                    window.alert(`
                                ----------------# VELHA :( #-----------
                                       Infelizmente o jogo deu velha!
                                -------------------------------------------
                    `);
    
                }
            }
        }

    }
}

function alteraJogador(){
    jogador = jogador === "X" ? "O" : "X"
}

function alteraTituloDoJogador() {
    tituloDoJogador.innerHTML = `JOGADOR DA VEZ: ${jogador}`
}

function iniciaJogo() {
    [...btns].forEach(btn => {
        btn.innerHTML = " "
        btn.addEventListener("click", jogadorJogou)
    });
    jogadas = 0
    alteraJogador()
    alteraTituloDoJogador()
}

iniciaJogo()