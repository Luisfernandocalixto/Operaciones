//Agrega a la pantalla el valor del botón de la calculadora
function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

// Borrar datos en la pantalla
function borrar() {
    document.getElementById('pantalla').value = '';
}

//Poder eliminar el ultimo caracter de la cadena
// slice para eliminar desde el primer posicion y eliminar => -1
function eliminar() {
    const cadena = document.getElementById('pantalla').value;
    const resultado = cadena.slice(0, - 1);
    document.getElementById('pantalla').value = resultado;

}

//Realizar raiz cuadrada con => Math.sqrt
function calcularRaiz() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = Math.sqrt(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}

//Calcular el logaritmo natural de un numero 
function calcularLogaritmo() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = Math.log(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}

//Tomar lo valores en pantalla y realizar los calculos
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
} 
