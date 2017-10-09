//Creando un string asignado al abecedario.
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//El string creado lo paso a un array.
var arr = str.split('');
var letraNueva= '';

do {
  //Crear una nueva variable word, donde ingreso la palabra.
  var word = prompt('Ingrese Texto');
} while (word.length===0 || !isNaN(word))

for(var i= 0; i< word.length ; i++)
//word[i] - es el elemento de la posición i
//charAt(i).- es para sacar caracter a la variable ingresada
num = (word.charAt(i).charCodeAt);
posicion = arr.indexOf(word.charAt(i));
nuevaPosicion=(posicion+num)%26
letraNueva =+ arr[nuevaPosicion-1];

//document.write(word[i]);
}
document.write(letraNueva);
//document.write(arr);
