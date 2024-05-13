// escribe una función en JS llamada reverseString que tome un string como argumento y devuelva el string invertido, 
// es decir, con sus cararcteres en orden inverso, sin usar el metodo reverse() de javascript.

function reverseString() {
  var str = document.getElementById('word').value;
  //convierto es strign en un array
  let strArray1 = str.split('');
  //array vacio para almacenar el string inverso
  let strArray2 = [];
  //variable para almacenar el string inverso
  let strInverse = '';
  //for para invertir el strArray1 y almacenarlo en el strArray2
  for (var i = strArray1.length - 1; i >= 0; i--){
    strArray2.push(strArray1[i]);
  }
  // convertimos en string
  strInverse = strArray2.join("");
  //retornamos el string inverso
  document.getElementById('reverseWord').innerHTML = strInverse
  console.log(strInverse);
}

alert(reverseString())