// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (n = 0; n < array.length; n++){
    array[n] = array[n] + 1;
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código: 
  array.push(elemento);
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código: 
  array.unshift(elemento);
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var newStr = palabras[0];
  for (n=1; n < palabras.length; n++){
      newStr = newStr + " " + palabras[n]; 
  }
  return newStr
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var toReturn = false;
  for(n=0; n<array.length; n++){
    if(array[n] === elemento){
      toReturn = true;
      break;
    }
  }
  return toReturn
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var mySum = 0;
  for(n=0; n<numeros.length; n++){
    mySum = mySum + numeros[n];
  }
  return mySum
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var myProm = 0;
  for(n=0; n<resultadosTest.length; n++){
    myProm = myProm + resultadosTest[n];
  }
  myProm = myProm / resultadosTest.length;
  return myProm
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var myMayor = numeros[0];
  for(n=1; n<numeros.length; n++){
    if(numeros[n] > myMayor){
      myMayor = numeros[n];
    }
  }
  return myMayor
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length == 0){
    return 0
  }

  var myMult = arguments[0];
  for(n = 1; n < arguments.length; n++){
    myMult = myMult * arguments[n]; 
  }

  return myMult;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  cont = 0;
  for(n = 0; n < arreglo.length; n++){
    if(arreglo[n] > 18){
      cont = cont + 1;
    }
  }
  return cont
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var myReturn = 'Es dia Laboral';
  if(numeroDeDia == 1 || numeroDeDia == 7){
    myReturn = 'Es fin de semana';
  }
  return myReturn
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var myStr = n.toString();
  if(myStr[0] == '9'){
    return true
  }
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var myReturn = true;  
  for(n = 1; n < arreglo.length; n++){
    if(arreglo[n] != arreglo[n-1]){
      myReturn = false;
      break;
    }
  }
  return myReturn
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var enero = false;
  var marzo = false;
  var noviembre = false;
  var myArray = 'No se encontraron los meses pedidos';
  var myArrayValido = [];
  for(n = 0; n < array.length; n++){
    if( array[n] == 'Enero' || array[n] == 'Marzo' || array[n] == 'Noviembre'){
      myArrayValido.push(array[n]);
    }
    switch(array[n]){
      case 'Enero':
        enero = true;
        break;
      case 'Marzo':
        marzo = true;
        break;
      case 'Noviembre':
        noviembre = true;
        break;
    }
  }
  if( enero == true && marzo == true && noviembre == true){
    return myArrayValido
  }
  return myArray
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var myArray = [];
  for(n = 0; n < array.length; n++){
    if(array[n] > 100){
      myArray.push(array[n]);
    }
  }
  return myArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var mySum = numero;
  var flagBreak = false;
  var myReturn = 'Se interrumpió la ejecución';
  var myArray = [];

  for(n = 1; n <=10; n++){
    mySum = mySum + 2;
    myArray.push(mySum);
    if(mySum == n){
      flagBreak = true;
      break;
    }
  }
  
  if(flagBreak){
    return myReturn
  }
  
  return myArray
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var mySum = numero;
  var myArray = [];

  for(n=1; n<=10; n++){
    if(n == 5){
      continue;
    }

    mySum = mySum + 2;
    myArray.push(mySum);
  }
  return myArray
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
