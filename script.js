// let numDeCartas = 0;

function comecar() {
    const quantidadeCartas = prompt("Com quantas cartas entre 4 e 14 deseja jogar? (Apenas números pares)");
    if (quantidadeCartas % 2 == 0 && quantidadeCartas >= 4 && quantidadeCartas <= 14) {
        alert("Vamos começar!");
    }else{
        comecar();
    }
}

comecar();

const cartas = document.querySelectorAll('.card');
let cartaVirada = false;
let primeiraCarta, segundaCarta;
let travarCartas = false;

function virarCarta() {
    if (travarCartas) return;
    this.classList.add('flip');
    if (!cartaVirada){
        cartaVirada = true;
        primeiraCarta = this;
        return;
    }
    segundaCarta = this;
    cartaVirada = false;
    checarPar()

    numDeCartas++;
}

function checarPar() {
    if (primeiraCarta.dataset.memoria === segundaCarta.dataset.memoria){
        bloquearCartas();
        return;
    }
    desvirarCartas();
}

function bloquearCartas() {
    primeiraCarta.removeEventListener('click', virarCarta);
    segundaCarta.removeEventListener('click', virarCarta);
}

function desvirarCartas() {
    travarCartas = true;
    setTimeout(() => {
        primeiraCarta.classList.remove('flip');
        segundaCarta.classList.remove('flip');
        travarCartas = false;
    }, 1500);
}

(function embaralhar() {
    cartas.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 14);
        card.style.order = ramdomPos;
    });
})();

cartas.forEach(card => card.addEventListener('click', virarCarta))

// function fimDeJogo() {
//     const cartasViradas = document.querySelectorAll(".flip").length;
//     if(cartasViradas === numDeCartas) {
//         alert("Parabéns! Você finalizou o jogo!");
//     }
// }

// function fimDeJogo() {
//     if(cartas === cartaVirada){
//         return(alert("Parabéns! Você finalizou o jogo!"));
//     }
// }