//Codigo del cuadrado

console.group("Cudrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden : " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimetro cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//Codigo del Triangulo

console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, y " + baseTriangulo + "cm ");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide : " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo ;
console.log("El perimetro del triangulo mide : " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El area del triangulo es : " + areaTriangulo + "cm^2");


console.groupEnd();

//Codigo Circulos

console.group("Circulos");


//radio

const radioCirculo = 4;
console.log("El radio del circulo es : " + radioCirculo + "cm");


//diametro

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es : " + diametroCirculo + "cm");

//PI

const PI = Math.PI;
console.log(" PI es : " + PI );


//Circunferencia

const perimetroCirculo = diametroCirculo * PI;
console.log("La circunferencia del circulo es : " + perimetroCirculo + "cm");

//Area 

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es : " + areaCirculo + "cm^2");







console.groupEnd();


