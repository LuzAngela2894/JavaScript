export const PI = Math.PI;

export let usuario = "Jon";

let password = "qwerty";
//export default password;

export default function saludar() {
    console.log("Hola Módulos + ES6");
}

export class Saludar {
    constructor() {
        console.log("Hola Clases + ES6");
    }
}