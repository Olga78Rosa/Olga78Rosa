//let numeroSecreto = generarNumeroSecreto(); LO CAMBIO POR LA ULTIMA condicionesIniciales QUE SE AGREGO
//let intentos = 1;
//se crea listaNumerosSorteados, para que no se repita el numero en un nuevo juego  
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[] ;
let numeroMaximo = 10;

console.log(numeroSecreto);
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10'
//esto se remplazo con las lineas de abajo

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return; 
}

function verificarIntento(){
    //alert('Click desde el botón');
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value); 
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Asertaste el número, en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    //let numeroDeUsuario = document.querySelector('imput');
    //el imput representa la caja blanca de la página web
    return;
}

function limpiarCaja() {
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';  SE PUEDE USAR DE LAS DOS FORMAS
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else{

            if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    //return Math.floor(Math.random()*10)+1; //esto tenia anteriormente y funcionaba
    //let numeroSecreto = Math.foor(Math.random()*10)+1;
    //return numeroSecreto;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar números aleatoreos
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');


}

condicionesIniciales();