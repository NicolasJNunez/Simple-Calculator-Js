
// var result = 1;
// var counter = 0;
// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
//   alert("Comenzando desde el numero 2, el resultado de 2 multiplicado por si mismo 10 veces se va mostrando aqui = \"" + result + "\"")
// }

// ---------------------------------------------------

// var elNombre;
// do {
//   elNombre = prompt("Escribi tu nombre Aquí");
// } while (!elNombre);
// alert("Muy bien, al fin lo escribiste " + elNombre);

// ---------------------------------------------------

// var shortt;
// shortt = 0;
// while (shortt < 12) {
//   shortt+= 2;
//   alert ("Los valores numericos de esta variable van a ir aumentando desde 2 hasta 12 = \"" + shortt + "\"");
// }

// ---------------------------------------------------

// switch (prompt ("Elegí: ¿Somos amigos, amigas, aquiles o monica?")) {
//   case "amigos":
//     alert ("Amigooorilaaaaa jojooo");
//     break;
//   case "amigas":
//     alert ("Amigaaaaallinaaa JojJOJo");
//     break;
//   case "aquiles":
//     alert ("AquilesMEOO LA TORREEE JOJOO");
//     break;
//   default:
//     alert ("Monicagaaaa LINDOOOO JAJAJjJ");
//     break;
// }

// ---------------------------------------------------

// var num1 = 6;
// var num2 = 5;

// if (num1 == num2 || num1 > num2) {
//   alert ("Se cumple el If")
// } else {
//   alert ("No se cumple el If")
// }

// ---------------------------------------------------

// var genero;
// var edad;

// genero = prompt ("Decime tu genero");
// edad = Number ( prompt ("Decime tu edad") );

// while (isNaN(edad)) {
//   edad = prompt ("Pudimos identificar el género pero no la edad, escribala nuevamente") 
//   }

// if (genero == "Hombre" || genero == "hombre" || genero == "Masculino" || genero == "masculino") {
//   if (edad >= 18) {
//     alert ("Bienvenido, tenes la edad indicada para entrar")
//   } else {
//     alert ("Bienvenido, perdon pero no podes entrar")
//   }
// } else if (genero == "Mujer" || genero == "mujer" || genero == "Femenino" || genero == "femenino") {
//     if (edad >= 18) {
//       alert ("Bienvenida, tenes la edad indicada para entrar")
//     } else {
//       alert ("Bienvenida, perdon pero no podes entrar")
//     }
// } else {
//   alert ("No pudimos identificar el género pero si pudimos identificar la edad. Aun así, refresque la página y vuelva a intentarlo")
// }

// ---------------------------------------------------

// var ejemploDeArray = ["Airon alto perro", 7, false];
// ejemploDeArray.push("Puki");
// alert (ejemploDeArray.join(", "));

// ---------------------------------------------------

// function miPrimeraFuncion (a) {
//   var variableParaEjemplo = "Hola, mi nombre es " + a;
//   return variableParaEjemplo;
// }

// var laQueRemplaza = "Don Jose";

// a = prompt ("Escribi tu nombre");
// alert (miPrimeraFuncion(laQueRemplaza));

// ---------------------------------------------------

// (function () {
//   var saludo = "Bienvenido, acabas de iniciar el programa. Te saludo desde la consola";
//   console.log (saludo);
// }())

// ---------------------------------------------------

function calc() {
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate;

  if (op == "add") {
    calculate = a + b;
  } else if (op == "min") {
    calculate = a - b;
  } else if (op == "mul") {
    calculate = a * b;
  } else if (op == "div") {
    calculate = a / b;
  }

  document.querySelector("#result").innerHTML = calculate;

}