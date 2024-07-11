
// 1Step

const km = prompt('Quanti chilometri vuoi percorrere');
console.log ('Chilometri che si vuole percorrere:', km );

//2 Step
const age = prompt("Inserisci l'età del passeggero");
console.log('Età del passeggero:', age);

// Step 3

const prezzoKm = (0.21);

let prezzoBiglietto = (km * prezzoKm);


if (age < 18) {

    prezzoBiglietto= (prezzoBiglietto - (prezzoBiglietto * ( 20 / 100) ));
    let prezzo = prezzoBiglietto;
    let prezzoDueDecimali = Math.round(prezzo*100.0)/100.0;
    document.getElementById ('prezzo-biglietto').innerHTML= prezzoDueDecimali;

}

else if (age >= 65) {

    prezzoBiglietto= (prezzoBiglietto - (prezzoBiglietto * ( 40 / 100) ));
    let prezzo = prezzoBiglietto;
    let prezzoDueDecimali = Math.round(prezzo*100.0)/100.0;
    document.getElementById ('prezzo-biglietto').innerHTML= prezzoDueDecimali;

}

else{

    
    let prezzo = prezzoBiglietto;
    let prezzoDueDecimali = Math.round(prezzo*100.0)/100.0;
    document.getElementById ('prezzo-biglietto').innerHTML= prezzoDueDecimali ;
}

   
      