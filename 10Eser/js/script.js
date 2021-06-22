// for

var result = 0;

for (var i = 1; i <= 5; i++) {
    var userNumber = parseInt(prompt('Inserisci un numero'));
    result += userNumber;
}

console.log('Somma For: ' + result);




// while
var sum = 0;

var x = 1;

while (x <= 5) {
    var userNumber = parseInt(prompt('Inserisci un numero'));
    sum += userNumber;
    x++;
}

console.log('Somma While: ' + sum);