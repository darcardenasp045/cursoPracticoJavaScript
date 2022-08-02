    //Iniciamos variables, cajas de texto y botones.

    var valor, perimetroCu, areaCu, ladoA, ladoB, ladoBase, perimetroTri, ba, alturaTri, alturaTriIsos, alturaTriangulo, ra, rad, perimetroCir, areaCir;
    var PI = Math.PI;
    var resultado = document.querySelector("resultado");
    var respuesta = document.getElementById("respuesta");
    var resultado1 = document.querySelector("resultado1");
    var respuesta1 = document.getElementById("respuesta1");
    var resultado2 = document.querySelector("resultado2");
    var respuesta2 = document.getElementById("respuesta2");
    var cuadPer = document.getElementById("perimetro");
    cuadPer.addEventListener("click",calcularPerimetroCuadrado);
    var cuadAr = document.getElementById("area");
    cuadAr.addEventListener("click",calcularAreaCuadrado);
    var triPer = document.getElementById("perimetro1");
    triPer.addEventListener("click",calcularPerimetroTriangulo);
    var triAre = document.getElementById("area1");
    triAre.addEventListener("click",calcularAreaTriangulo);
    var circPer = document.getElementById("perimetro2");
    circPer.addEventListener("click",calcularPerimetroCirculo);
    var circAr = document.getElementById("area2");
    circAr.addEventListener("click",calcularAreaCirculo);
    var triAltu = document.getElementById("alturaIso");
    triAltu.addEventListener("click",calcularAlturaTrianguloIsosceles);
    
    //Codigo del cuadrado

    //Creamos la formula matematica 

    function perimetroCuadrado(lado){
       
        return lado * 4;
    }
           
    function areaCuadrado(lado){
         
        return lado * lado;
    }

    //creamos las funciones para disparar los OnClicks
    
    function calcularPerimetroCuadrado(){
        var l = document.getElementById("lados");
        valor= parseInt(l.value);
        perimetroCu = perimetroCuadrado(valor);
        respuesta.innerHTML = perimetroCu;
        
    }

    function calcularAreaCuadrado(){
        var l = document.getElementById("lados");
        valor= parseInt(l.value);
        areaCu = areaCuadrado(valor);
        respuesta.innerHTML = areaCu;
        
    }

 //Codigo Triangulo

    //Creamos la formula matematica 

    function perimetroTriangulo(lado1, lado2, base){
        return lado1 +lado2 + base;
    }

   
    function areaTriangulo(base, altura){
        return (base * altura) / 2;

    }

    function alturaTrianguloIsosceles(lado1, lado2){
         
        return Math.sqrt((lado1*lado1)-(lado2*lado2));
         
    }

    console.log(alturaTrianguloIsosceles);

    //creamos las funciones para disparar los OnClicks

    function calcularPerimetroTriangulo(){
        var l1 = document.getElementById("lado1");
        ladoA= parseInt(l1.value);
        var l2 = document.getElementById("lado2");
        ladoB= parseInt(l2.value);
        ba = document.getElementById("base");
        ladoBase= parseInt(ba.value);
        perimetroTri = perimetroTriangulo(ladoA, ladoB, ladoBase);
        respuesta1.innerHTML = perimetroTri;
        
    }

    function calcularAreaTriangulo(){
        ba = document.getElementById("base");
        ladoBase= parseInt(ba.value);
        var al = document.getElementById("altura");
        alturaTri= parseInt(al.value)
        alturaTriangulo = areaTriangulo(ladoBase, alturaTri);
        respuesta1.innerHTML = alturaTriangulo;
        
    }

    function calcularAlturaTrianguloIsosceles(){
        var l1 = document.getElementById("lado1");
        ladoA= parseInt(l1.value);
        var l2 = document.getElementById("lado2");
        ladoB= parseInt(l2.value);
        alturaTriIsos = alturaTrianguloIsosceles(ladoA, ladoB);
        respuesta1.innerHTML = alturaTriIsos;

    }
   
//Codigo Circulos

    //Creamos la formula matematica 

    function diametroCirculo (radio){
        return radio *2 ;
    }
        
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }
    
    function areaCirculo(radio){
        return (radio * radio) * PI;
    }

    //creamos las funciones para disparar los OnClicks

    function calcularPerimetroCirculo(){
        ra = document.getElementById("radio");
        rad= parseInt(ra.value);
        perimetroCir= perimetroCirculo(rad);
        respuesta2.innerHTML = perimetroCir;
    }

    function calcularAreaCirculo(){
        ra = document.getElementById("radio");
        rad= parseInt(ra.value);
        areaCir= areaCirculo(rad);
        respuesta2.innerHTML = areaCir;
    }


