alert("Bienvenidos a nuestro restaurante");
var entrada=parseInt(prompt("Ingrese el precio de la entrada: "))
var segundo=parseInt(prompt("Ingrese el precio del segundo: "))
var postre=parseInt(prompt("Ingrese el precio del postre: "))
var total=entrada+segundo+postre
var igv=(total*18/100)+total
console.log ("El precio de la entrada es:", entrada)
console.log ("El precio del segundo es:", segundo)
console.log ("El precio del postre es:", postre)
console.log ("El total del precio es:", total)
console.log ("La cuenta total con IGV es:", igv)