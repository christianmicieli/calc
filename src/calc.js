const sum = require ('./src/math').sum
const sub = require ('./src/math').sub
const div = require ('./src/math').div
const mul = require ('./src/math').mul
const pow = require ('./src/math').pow

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function calc () {
  console.log ("Operazioni disponibili: \n 0.Per Uscire \n 1.Addizione \n 2.Sottrazione\n 3.Moltiplicazione\n 4.Divisione\n 5.Potenza")

  readline.question('Che operazione vuoi eseguire? ', op =>{

    if ( op == 0 ){
      console.log("Grazie per aver usato la nostra calcolatrice <3\n");
      readline.close();
      return;
    }
  
    readline.question('Inserisci il primo numero: ', num1 => {

      readline.question('Inserisci il secondo numero: ', num2 => {

          num1 = parseFloat(num1);
          if (isNaN(num1)) {
            console.log('Errore: il primo numero inserito non è valido.');
            readline.close();
            return; 
          }
          
          num2 = parseFloat(num2);
          if (isNaN(num2)) {
            console.log('Errore: il secondo numero inserito non è valido.');
            readline.close();
            return;  
          }


        switch(op){

          case '1':  
            console.log("Risultato addizione:", sum(num1, num2));
            break;
          case '2':
            console.log("Risultato sottrazione:", sub(num1, num2));
            break;
          case '3':
            console.log("Risultato moltiplicazione:", mul(num1, num2));
            break;
          case '4':
            if ( num2 == 0 )
              console.log("Impossibile dividere per zero");
            else 
              console.log("Risultato divisione:", div(num1, num2));
            break;
          case '5': 
            console.log("Risultato potenza: ", pow(num1, num2) );
            break;
            
          default:
            console.log('Operazione non valida');

        } 

        calc();

      });

    });

  });

}

calc();
