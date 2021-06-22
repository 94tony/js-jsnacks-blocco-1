var invito = prompt("Nome Invitato?") ;
var registrati = ['Pippo', 'Luca', 'Paolo', 'Marco', 'Maria', 'Gianni'];

var output = document.getElementById('registrati-list');

var check = false; 
for (var i = 0; i < registrati.length; i++) {
    if (invito === registrati[i]) {
        check = true;
        break; // esci dal ciclo.
    }
}

if (check) {
    output.innerHTML += "sabato ore 21 non mancare !";
} else {
    output.innerHTML += "accesso negato";
}