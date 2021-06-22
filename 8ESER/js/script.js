// scrivi un numero di 4 cifre 
// calcola la somma delle 4 cifre 

var userNumber = prompt('Inserisci un numero di 4 cifre');

var inputLen = userNumber.length;

if (inputLen !== 4) {

    alert(' Devi inserire un numero di 4 cifre');

} else if (isNaN(userNumber)) {
    
    alert("L'input deve essere obbligatoriamente un numero.");

} else {

    var result = 0;

    for (var i = 0; i < inputLen; i++) {
        result += parseInt(userNumber[i])
    }

    console.log(result);
}
