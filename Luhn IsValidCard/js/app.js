//1.Crear función isValidCard

function isValidCard(sixteenDigitString) {

    var reverse = 0; //Donde se va a guardar los números invertidos
    var resto = sixteenDigitString; //Número de la tarjeta
        do {
       reverse = reverse * 10 + (resto % 10);
       resto = Math.floor(resto / 10);
      } while ( resto > 0 )
      // {        return reverse};

    var numSum = 0; //numSum es la sumatoria de todos los números una vez apliacado las operaciones
    var value; //value son el resultado de las operaciones que se les ha aplicado a los números (par, impar)
     for (var i = 1; i <= 16; i++) {
        if  (i % 2 === 0) {
            value = 2 * reverse[i];
            if (value >= 10) {
                value = (Math.floor(value / 10) + value % 10);
            }
        } else {
            value = reverse[i];
        }
        numSum += value;
    }
        return  (numSum % 10 === 0 ? 'Tarjeta de Crédito Válida' : 'Tarjeta de Crédito no Válida');
}

console.log(isValidCard(408395201526310))
