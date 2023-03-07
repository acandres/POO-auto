import { Auto } from "./auto";

const fs = require("fs");

let listaVehiculos: any[] = [];

const data = fs.readFileSync("./autos.json", "utf8");
    const vehiculos = JSON.parse(data);
    for (let i = 0; i < vehiculos.length; i++) {
      listaVehiculos.push(vehiculos[i]);
    }

export class RegistroAuto {

  todos() {
    console.log(listaVehiculos)
  }
  //auto: Auto, array: Auto[]
  poner(auto:Auto, array: Auto[]) {
    
    if (array.push(auto)) {
      console.log("Se agrego ", auto);
      this.todos(); 
    } else {
      console.log(auto, " no se pudo incorporar");
    }
  }

  sacar(id:number, array: Auto[]): any {
    let autoBaja = array.findIndex((auto) => auto.id === id);

    if (autoBaja >= 0) {
      array.splice(autoBaja, 1);
      console.log("El vehiculo ", id , "es baja");
      //console.log(array);

      return array;
    } else {
      console.log(
        "El vehiculo ",id ," no dio baja"
      );
    }
  }

   buscar(id:number, array:Auto[]) {
    let existe = array.find((auto) => auto.id === id);
      if (existe) {
      console.log(id , " Esta disponible ", existe);
      return existe;
    } else {
      console.log(id, " No esta disponible");
    }
  }
}


let corolla= new Auto(6, "Toyota", 2011, "Sedan");
let registro = new RegistroAuto();

//registro.todos() 
//registro.buscar(1, listaVehiculos); 
//registro.poner(corolla, listaVehiculos); 