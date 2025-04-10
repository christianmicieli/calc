const sum = require ('./math').sum
const sub = require ('./math').sub
const div = require ('./math').div
const mul = require ('./math').mul

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log ("Operazioni disponibili: \n 1.Addizione \n 2.Sottrazione\n 3.Moltiplicazione\n 4.Divisione")
  
  readline.question('Inserisci il primo numero: ', num1 => {
    readline.question('Inserisci il secondo numero: ', num2 => {

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    readline.question('Che operazione vuoi eseguire?', op => {

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
          console.log("Risultato divisione:", div(num1, num2));
          break;
          
        default:
          console.log('Operazione non valida');

      } 

      readline.close();
    });
  });
});
