"use strict"

class Empleado{
    #nombre;
    #apellido;
    #nacimiento;
    #sueldo;

    constructor(nombre, apellido, nacimiento, sueldo){
        this.#nombre=nombre;
        this.#apellido=apellido;
        this.#nacimiento=nacimiento;
        this.#sueldo=sueldo;
    }

    getNombre(){
        return this.#nombre;
    }
    getApellido(){
        return this.#apellido;
    }
    getNacimiento(){
        return this.#nacimiento;
    }
    getSueldo(){
        return this.#sueldo;
    }
    toString(){
        return `<tr>
                    <td>${this.#nombre}</td>
                    <td>${this.#apellido}</td>
                    <td>${this.#nacimiento}</td>
                    <td>${this.#sueldo}</td>
                </tr>`;
    }

}

let empleados = [
    new Empleado("Andrés", "García", 1985, 2500),
    new Empleado("María", "Lopez", 1990, 2700),
    new Empleado("Juan", "Pérez", 1982, 2900),
    new Empleado("Laura", "Martínez", 1995, 2300),
    new Empleado("Carlos", "Hernández", 1988, 3100),
    new Empleado("Elena", "González", 1992, 2600),
    new Empleado("Sergio", "Rodríguez", 1987, 2800),
    new Empleado("Ana", "Sánchez", 1994, 2400),
    new Empleado("Fernando", "Ramírez", 1989, 3200),
    new Empleado("Patricia", "Fernández", 1991, 3000),
  ];

let tabla = document.getElementById("tabla");

/* REFERENCIA forEach
numeros.forEach((numero) => {
  console.log(numero); 
}); 
*/

let tipoOrden="";

function construirTabla(empleados){
    tabla.innerHTML=null;
    empleados.forEach((empleado) => {
        tabla.innerHTML += empleado.toString();
    });
}

function ordenarNombre(){
    if(tipoOrden!="NombreMayor"){
        empleados.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
        construirTabla(empleados);
        tipoOrden="NombreMayor";
    }else{
        empleados.sort((a, b) => b.getNombre().localeCompare(a.getNombre()));
        construirTabla(empleados);
        tipoOrden="";
    }
    
}

function ordenarApellido(){
    if(tipoOrden!="ApellidoMayor"){
        empleados.sort((a, b) => a.getApellido().localeCompare(b.getApellido()));
        construirTabla(empleados);
        tipoOrden="ApellidoMayor";
    }else{
        empleados.sort((a, b) => b.getApellido().localeCompare(a.getApellido()));
        construirTabla(empleados);
        tipoOrden="";
    }
}

function ordenarNacimiento(){
    if(tipoOrden!="NacimientoMayor"){
        empleados.sort((a, b) => a.getNacimiento()-b.getNacimiento());
        construirTabla(empleados);
        tipoOrden="NacimientoMayor";
    }else{
        empleados.sort((a, b) => b.getNacimiento()-a.getNacimiento());
        construirTabla(empleados);
        tipoOrden="";
    }
}

function ordenarSueldo(){
    if(tipoOrden!="SueldoMayor"){
        empleados.sort((a, b) => a.getSueldo()-b.getSueldo());
        construirTabla(empleados);
        tipoOrden="SueldoMayor";
    }else{
        empleados.sort((a, b) => b.getSueldo()-a.getSueldo());
        construirTabla(empleados);
        tipoOrden="";
    }
}

construirTabla(empleados);
document.getElementById("nombre").addEventListener("click", ordenarNombre);
document.getElementById("apellido").addEventListener("click", ordenarApellido);
document.getElementById("nacimiento").addEventListener("click", ordenarNacimiento);
document.getElementById("sueldo").addEventListener("click", ordenarSueldo);