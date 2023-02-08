/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola 
inserita è palindroma
Comunicare all’utente (decidete voi come) 
se la parola che ha inserito è palindroma oppure no
*/

console.log('PALINDROMA');
// let word = 'anna'
let word = prompt('Inserisci la parola');
let palindroma = word.toLowerCase();

while (!isNaN(palindroma)) {
    word = prompt('Inserisci la parola');
    palindroma = word.toLowerCase();
}
console.log('parola:',palindroma);

console.log('frase convertita in array:');
converti(palindroma);

console.log('frase invertita:'); 
let paliInv=inverti(palindroma);

console.log('risultato:');
compara(palindroma,paliInv);


/**********************************
FUNCTION
**********************************/

function converti (parola){
    const lettere = parola.split("");
    console.log(lettere,lettere.length);
}
function inverti (original){
    let inverted = '';
    for (let i = original.length - 1; i >= 0; i--) {
        inverted += original[i];
    }
    console.log(inverted);
    return inverted;
}
function compara(verse, reverse) {
    if(verse===reverse){
        console.log(true);
        console.log('la tua parola è palindroma!');
    }else{
        console.log(false);
        console.log('la tua parola NON è palindroma!');
        }
}





/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Comunichiamo all’utente chi ha vinto. (decidete voi come)
*/

console.log('PARI E DISPARI');


let chose = prompt('pari o dispari?');
let sceltaUtente = chose.toLowerCase();

while (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari') {
    chose = prompt('pari o dispari?');
    sceltaUtente = chose.toLowerCase();
}
console.log('scelta utente:',sceltaUtente);  

const MIN = 1;
const MAX = 5;

let numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
while (numeroUtente > MAX || numeroUtente < MIN || isNaN(numeroUtente)) {
    numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
}
console.log('numero utente:',numeroUtente);

let numeroPc = numeroRandom(MIN,MAX);
console.log('numero pc:', numeroPc);

let totale = sommaNumeri(numeroUtente,numeroPc);
console.log('totale:',totale);

let tipoNumero = pariOdispari(totale);
console.log('la somma è:',tipoNumero);

let risposta = vittoria(tipoNumero,sceltaUtente)




/**********************************
FUNCTION
**********************************/
function numeroRandom(MINIMO, MAXIMO) {
    MAXIMO++;
    return  Math.floor(Math.random() * (MAXIMO - MINIMO) + MINIMO);
}

function sommaNumeri(utente, pc) {
    return utente + pc;
}

function pariOdispari(num) {
    if(num % 2 === 0){
        let pari = 'pari';
        return pari;
    }else if( num % 2 === 1){
        let dispari = 'dispari';
        return dispari;
    }
}

function vittoria(numero, scelta) {

    if (numero === scelta) {
        console.log('vince l\'utente');
    }else{
        console.log('vince il pc');
    }

}








