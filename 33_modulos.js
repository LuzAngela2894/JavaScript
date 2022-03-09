import saludar, { Saludar, PI, usuario } from "./33_constantes.js";
import { aritmetica as calculos } from "./33_aritmetica.js";
console.log("Archivos Módulos.js");
console.log(PI, usuario);
console.log(calculos.sumar(8, 5));
console.log(calculos.restar(18, 7));
saludar();
let saludo = new Saludar();
saludo;
