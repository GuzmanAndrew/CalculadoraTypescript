var Display = /** @class */ (function () {
    function Display(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-',
        };
    }
    Display.prototype.borrar = function () {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    };
    Display.prototype.borrarTodo = function () {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    };
    Display.prototype.computar = function (tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    };
    Display.prototype.agregarNumero = function (numero) {
        if (numero === '.' && this.valorActual.includes('.'))
            return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    };
    Display.prototype.imprimirValores = function () {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = "".concat(this.valorAnterior, " ").concat(this.signos[this.tipoOperacion] || '');
    };
    Display.prototype.calcular = function () {
        var valorAnterior = parseFloat(this.valorAnterior);
        var valorActual = parseFloat(this.valorActual);
        if (isNaN(valorActual) || isNaN(valorAnterior))
            return;
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    };
    return Display;
}());
