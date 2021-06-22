var numF  = prompt("INSERISCI NUMERO") ;
var numS  = prompt("INSERISCI SECONDO NUMERO") ;

if (numF > numS) {
   document.getElementById("result").innerHTML = numF;
} else {
    document.getElementById("result").innerHTML = numS;
}