var parolaF  = prompt("INSERISCI NUMERO") ;
var parolaS  = prompt("INSERISCI SECONDO NUMERO") ;

if(parolaF.length < parolaS.length){
    document.getElementById("result").innerHTML =  parolaF + "  " + parolaS;
 } else {
     document.getElementById("result").innerHTML = parolaS + "  " + parolaF;
 }