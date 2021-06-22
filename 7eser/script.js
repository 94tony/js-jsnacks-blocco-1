var NumberChoose = prompt("inserisci un numero ")
 var array = [] 
 for ( x = 0; x<NumberChoose ; x++)
 {
array.push(x*x*x)
 }
 document.getElementById("result").innerHTML = array