// Escriba una función que tome una cadena de una o más palabras y devuelva la misma cadena, pero con todas las palabras que tengan cinco o más letras invertidas (como el nombre de este Kata). 
// Las cadenas pasadas consistirán únicamente en letras y espacios. Los espacios se incluirán sólo cuando haya más de una palabra presente.

// Ejemplos:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string){
  //variable para ingresar string
  let contentString = string;
  let showFinalString = "";
  
  //convertir el string en un array
  let stringToArray = contentString.split(' ');
  
  //condición para invertir parabras (si se cumple la condición se invierte la palabra)
  let reversorWord = stringToArray.map(
    function(element){
      if (element.length >= 5){
        return element.split('').reverse().join('');
      } else {
        return element;
      }
    }
  )
  
  //Transformar el array en string 
  showFinalString = reversorWord.join(' ');
  
  //mostrar string modificado
  return showFinalString;
}

//test
console.log(spinWords("Welcome"))