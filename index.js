const prompt = require('prompt-sync')();
//No cambiar el nombre de la función ordenarNumeros

function ordenarNumeros(num1, num2, num3) {

  let mayor //= parseInt(prompt("Ingrese el primer numero: "))
  let centro //= parseInt(prompt("Ingrese el segundo numero: "))
  let menor //= parseInt(prompt("Ingrese el tercer numero: "))

  const array = [num1, num2, num3]
  array.sort()
  //array.reverse()
  mayor=parseInt(array[2])
  centro=parseInt(array[1])
  menor=parseInt(array[0])
  
  if (mayor===centro && centro===menor){
    return "Los números son iguales"
    } else {
    console.log("mayor: "+mayor)
    console.log("centro: "+centro)
    console.log("menor: "+menor)
   }
  


  
// No modificar el código debajo de esta línea
  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };
}

module.exports = ordenarNumeros;