function suscrito(){
    const buttElemnt= document.querySelector('.JS-SubsButton')
    if (buttElemnt.innerText==='Suscribete') {
        buttElemnt.innerText = 'Suscrito'
    } else {
        buttElemnt.innerText = 'Suscribete'
    }
}

function updatMarcador() {
    if (marcador.OG===1)
        checkMarcador.innerText=`Ganadas: ${marcador.Ganados} , Perdidas: ${marcador.Perdidos} , Empates: ${marcador.Empates}`
    else
        null
}
function updateText(){
    if (marcador.OG===1){
        textResult.innerText=` Seleccionaste ${userChoice}. Computadora selecciono ${seleccionCompu}. ${resultado}`
    }
}

function reinicioText(){
    marcador.Empates=0
    marcador.Perdidos=0
    marcador.Ganados=0
    localStorage.removeItem('marcador')
    updatMarcador()
    marcador.OG=0
    textResult.innerText='Marcador Reiniciado'
}
// Funciones del Piedra papel tijera mejorado
let marcador= JSON.parse(localStorage.getItem('marcador'))  || { Empates: 0, Ganados: 0, Perdidos: 0 };
const checkMarcador= document.querySelector('.Marcador')
const textResult=document.querySelector('.Resultado')

if (marcador===null){
    marcador={
        Ganados:0,
        Perdidos: 0,
        Empates:0,
        OG:1
    }
}
let seleccionCompu ='';

let resultado=``
function ppt(userChoice) {
    const numeroRandom = Math.random();
    if (numeroRandom >= 0 && numeroRandom < 1 / 3) {
        seleccionCompu = `Piedra`;
    } else if (numeroRandom >= 1 / 3 && numeroRandom < 2 / 3) {
        seleccionCompu = `Papel`;
    } else {
        seleccionCompu = `Tijeras`;
    }
    if (userChoice === seleccionCompu) {
        resultado = `Empate`;

    } else if ((userChoice === `Piedra` && seleccionCompu === `Tijeras`) ||
        (userChoice === `Papel` && seleccionCompu === `Piedra`) ||
        (userChoice === `Tijeras` && seleccionCompu === `Papel`)) {
        resultado = `Ganaste`;
    } else {
        resultado = `Perdiste`;
    }
    {
        if (resultado === `Empate`)
            marcador.Empates++

        else if (resultado === `Ganaste`)
            marcador.Ganados++
        else
            marcador.Perdidos++
    }
    textResult.innerText=`Seleccionaste ${userChoice}. Computadora selecciono ${seleccionCompu}. ${resultado}`
    marcador.OG=1
    localStorage.setItem(`marcador`, JSON.stringify(marcador));
    updatMarcador()
    updateText()
}
