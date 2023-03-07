"use strict";
exports.__esModule = true;
exports.RegistroAuto = void 0;
var auto_1 = require("./auto");
var fs = require("fs");
var listaVehiculos = [];
var data = fs.readFileSync("./autos.json", "utf8");
var vehiculos = JSON.parse(data);
for (var i = 0; i < vehiculos.length; i++) {
    listaVehiculos.push(vehiculos[i]);
}
var RegistroAuto = /** @class */ (function () {
    function RegistroAuto() {
    }
    RegistroAuto.prototype.todos = function () {
        console.log(listaVehiculos);
    };
    //auto: Auto, array: Auto[]
    RegistroAuto.prototype.poner = function (auto, array) {
        if (array.push(auto)) {
            console.log("Se agrego ", auto);
            this.todos();
        }
        else {
            console.log(auto, " no se pudo incorporar");
        }
    };
    RegistroAuto.prototype.sacar = function (id, array) {
        var autoBaja = array.findIndex(function (auto) { return auto.id === id; });
        if (autoBaja >= 0) {
            array.splice(autoBaja, 1);
            console.log("El vehiculo ", id, "es baja");
            //console.log(array);
            return array;
        }
        else {
            console.log("El vehiculo ", id, " no dio baja");
        }
    };
    RegistroAuto.prototype.buscar = function (id, array) {
        var existe = array.find(function (auto) { return auto.id === id; });
        if (existe) {
            console.log(id, " Esta disponible ", existe);
            return existe;
        }
        else {
            console.log(id, " No esta disponible");
        }
    };
    return RegistroAuto;
}());
exports.RegistroAuto = RegistroAuto;
var corolla = new auto_1.Auto(6, "Toyota", 2011, "Sedan");
var registro = new RegistroAuto();
//registro.todos() 
//registro.buscar(1, listaVehiculos); 
//registro.poner(corolla, listaVehiculos); 
