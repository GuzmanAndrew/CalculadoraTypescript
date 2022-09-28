var displayValorAnterior = document.getElementById('valor-anterior');
var displayValorActual = document.getElementById('valor-actual');
var botonesNumeros = document.querySelectorAll('.numero');
var botonesOperadores = document.querySelectorAll('.operador');
var display = new Display(displayValorAnterior, displayValorActual);
botonesNumeros.forEach(function (boton) {
    boton.addEventListener('click', function () { return display.agregarNumero(boton.innerHTML); });
});
botonesOperadores.forEach(function (boton) {
    boton.addEventListener('click', function () { return display.computar(boton.value); });
});
