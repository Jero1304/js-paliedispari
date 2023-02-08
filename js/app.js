/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola 
inserita è palindroma
Comunicare all’utente (decidete voi come) 
se la parola che ha inserito è palindroma oppure no
*/

/**********************************
console.log('PALINDROMA');
//*********************************
// let word = 'anna'
let word = prompt('Inserisci la parola');
let palindroma = word.toLowerCase();
console.log('parola:',palindroma);

console.log('frase convertita in array:');
converti(palindroma);

console.log('frase invertita:'); 
let paliInv=inverti(palindroma);

console.log('risultato:');
compara(palindroma,paliInv);
*/

/**********************************
FUNCTION
**********************************/
/*
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
function compara(verse, reverse ) {
    if(verse===reverse){
        console.log(true);
    }else{
        console.log(false);
        }
}

*/




/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Comunichiamo all’utente chi ha vinto. (decidete voi come)
*/

console.log('PARI E DISPARI');

// let pariOdispari = prompt('pari o dispari?');
// console.log(pariOdispari);

// let numeroUtente = prompt('inserisci un numero da 1 a 5');
let numeroUtente = 2;
console.log(numeroUtente);

const MIN = 1;
const MAX = 5;
let numeroPc = numeroRandom(MIN,MAX);
console.log('numero pc:', numeroPc);

let totale = sommaNumeri(numeroUtente,numeroPc);
console.log('totale:',totale);





/**********************************
FUNCTION
**********************************/
function numeroRandom(MINIMO, MAXIMO) {
    MAXIMO++;
    // numero = 
    // console.log(numero);
    return  Math.floor(Math.random() * (MAXIMO - MINIMO) + MINIMO);
}

function sommaNumeri(utente, pc) {
    // console.log(utente, pc);
    return utente + pc;

}









