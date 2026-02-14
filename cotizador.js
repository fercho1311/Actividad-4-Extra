//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
const precio_base = 2000

//Subtotales
let subtotal = 0
let subtotal_conyuge = 0
let subtotal_hijos = 0
let precio_total = 0

//Valores de los recargos 
const recargo_1 = 0.1 //10%
const recargo_2 = 0.2 //20%
const recargo_3 = 0.3 //30%

//Recargos del conyuge
const recargo_conyuge_1 = 0.1 //10%
const recargo_conyuge_2 = 0.2 //20%
const recargo_conyuge_3 = 0.3 //30%

//Recargo por hijos
const recargo_hijos = 0.2 // 20%

let edad_asegurado = 0
let casado = 0
let edad_conyuge = 0
let hijos = 0
let cantidad_hijos = 0
let mensaje_salida = ""

while("SALIR" != mensaje_salida.toUpperCase()){
//Mensajes de alerta para ingresar datos 
//Datos del asegurado
let nombre_apellido = 0
    nombre_apellido = prompt("Ingrese su nombre, por favor")

  while(edad_asegurado <18 || !edad_asegurado ){
    edad_asegurado = parseInt(prompt("¿Cuantos años tiene? Ingrese solamente números")) 
      if(edad_asegurado < 18){
        alert("Debe de ser mayor edad (+18) para poder contratar un seguro")
    } else if(!edad_asegurado){
        alert("Debe de ingresar unicamente numeros")
    }
  }
//Datos de conyuge 
casado = prompt("¿Está casado actualmente?, Si/No")

//Comprobamos la edad del cónyuge, solamente si se está casado/a
  if("SI" == casado.toUpperCase()){
    while(edad_conyuge < 18 || !edad_conyuge){ 
        edad_conyuge = parseInt(prompt("¿Que edad tiene su esposo/a?"))
        if (edad_conyuge < 18){
       alert("Su conyuge debe de ser mayor de edad (+18)") 
      } else if(!edad_conyuge){
        alert("Debe de ingresar unicamente numeros")
      }
    }
  }

//Comprobamos la cantidad de hijos solamente si los tienen
hijos = prompt("¿Tiene hijos o hijas? Si/No")
/**
 * 1. convierta la cantidad de hijos a numero
 */
  if("SI" == hijos.toUpperCase()){
  while(cantidad_hijos <= 0 || !cantidad_hijos){
    cantidad_hijos = parseInt(prompt("Por favor indique la cantidad de hijos/as"))
        if(cantidad_hijos <= 0){
        alert("La cantidad de hijos ingresada es incorrecta")
      } else if(!cantidad_hijos){
        alert("Debe de ingresar unicamente numeros")
      }
    }
  }

let propiedades = 0
let numero_propiedades = 0
let recargo_propiedades = 0.35 // 35%
let subtotal_propiedades = 0

//Comprobamos la cantidad de propiedades solamente si tienen
propiedades = (prompt("¿Tiene propiedades actualmente?, Si/No"))

  if("SI" == propiedades.toUpperCase()){
    while(numero_propiedades <= 0 || !numero_propiedades){
    numero_propiedades = parseInt(prompt("Por favor indique la cantidad de propiedades"))
      if(numero_propiedades <= 0){
        alert("La cantidad de propiedades ingresada es incorrecta")
    } else if(!numero_propiedades){
        alert("Debe de ingresar unicamente numeros")
    }
    }
  } 

let salario = 0
let recargo_salario = 0.05 //5%
let subtotal_salario = 0

//Comprobamos salario 
      while(isNaN(salario) || salario == 0){
        salario = parseInt(prompt("Por favor indique su salario, ingrese solamente numeros"))
      if(isNaN(salario))
        alert("Debe de ingresar unicamente numeros")
      else if(salario == 0){
        alert("Su salario no puede ser cero, ingrese nuevamente su salario")
    }
  }
 
//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
  if(edad_asegurado >= 18 && edad_asegurado <= 24){
  //Calculamos el recargo en base a la edad 
  subtotal = precio_base * recargo_1
  //aqui puede colocar un else if() con el siguiente rango
  } else if(edad_asegurado >=25 && edad_asegurado <= 49){
  subtotal = precio_base * recargo_2
  } else {
  subtotal = precio_base * recargo_3 
  } 

/** 
 * 2. Recargo por la edad del conyuge
 */
  if("SI" == casado.toUpperCase()){
    if(edad_conyuge >= 18 && edad_conyuge <= 24){
      subtotal_conyuge = precio_base * recargo_conyuge_1
  } else if (edad_conyuge >= 25 && edad_conyuge <= 49){
      subtotal_conyuge = precio_base * recargo_conyuge_2
  } else {
      subtotal_conyuge = precio_base * recargo_conyuge_3
  }
  }

/**
 * 3. Recargo por la cantidad de hijos 
 */ 

  if("SI" == hijos.toUpperCase()){
  subtotal_hijos = (precio_base * recargo_hijos) * cantidad_hijos
  }

//Recargo por propiedades

  if("SI" == propiedades.toUpperCase()){
    subtotal_propiedades = (precio_base * recargo_propiedades) * numero_propiedades
  }

//Recargo por salario
  subtotal_salario = (salario * recargo_salario)

//Sumamos todos los recargos que hemos obtenido
  precio_total = precio_base + subtotal + subtotal_conyuge + subtotal_hijos + subtotal_propiedades + subtotal_salario

//Resultado
  alert("Para el solicitante "+nombre_apellido)
  alert("Recargo por propiedades Q"+subtotal_propiedades)
  alert("Tendrá un recargo total de Q"+(subtotal + subtotal_conyuge + subtotal_hijos + subtotal_propiedades + subtotal_salario))
  alert("El valor total de su seguro sera de "+"Q"+(precio_total))

//Mensaje para repetir las cotizaciones
mensaje_salida = prompt("Se repetira nuevamente la cotizacion, si no desea realizar otra cotizacion escriba salir")

}
