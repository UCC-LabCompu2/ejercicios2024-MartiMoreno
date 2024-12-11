/**
 * conversion de unidades, de metrods, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies y pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies y pulgadas
 * @return
 */
function cambiarUnidades (id, valor){
    var metro, pulgada, pie, yarda;
    if(isNaN(valor)) {
        alert("Se ingreso unvalor invalido");
        metro = "";
        pulgada = "";
        pie = "";
        document.getElementById("yarda").value = "";
    }else if(id==="metro"){
        metro =valor;
        pulgada = valor*39.3701;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    }else if(id==="pulgada"){
        pulgada= valor;
        metro =0.0254*valor;
        pie=0.0833333*valor;
        yarda=0.0277778*valor;
    }else if(id==="pie"){
        pie = valor;
        metro= 0.3048*valor;
        pulgada = 12*valor;
        yarda = 0.333333*valor;
    }else if(id=="yarda") {
        yarda =valor;
        metro = 0.9144 * valor;
        pulgada = 36 * valor;
        pie = 3 * valor;
    }
    document.lasUnidades.unid_metro.value=metro;
    document.lasUnidades.unid_pulgada.value= pulgada;
    document.lasUnidades.unid_pie.value=pie;
    document.lasUnidades.unid_yarda.value=yarda;
}

function convertirGR (id){
    var grad, rad;
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad= (grad*Math.PI)/180;
    }else if (id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;

}

function mostrar_ocultar (valorMO){
    if (valorMo=="val_mostrar"){
        document.getElementById("divMo").style.display='block';
    }else if (valorMo=="val_mostrar"){
        document.getElementById("divMo").style.display='none';
    }
}

function calcularSuma(){
    var num1, num2;
    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("num_total")[0].value=num1 +num2;
}

//dibujar cuadrado y circulo
function dibujarCirculoCuadrado(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchomax =canvas.width
    const alturamax =canvas.height
    const lado =200;
    const margen =10;

    ctx.fillStyle = "#45a3b6";
    ctx.fillRect(0+margen, alturamax-lado-margen, lado,lado);

    ctx.fillStyle = "#20e347"
    ctx.arc(anchomax/2,alturamax/2, lado/2, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

}
//mini - print
function cargarEventListener() {
    document.getElementById("myCanvas").addEventListener("mousemove", dibujar);
}
var bandera;
function dibujar (event){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const posX = event.clientX;
    const posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function() {bandera=false};
    if (bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }
}
function borrarCanvas(){
    const canvas = document.getElementById("myCanvas");
    canvas.width = canvas.width;
}

//cuadriculado
function dibujarCuadriculado(){
    console.log("dibujar")
    const canvas =document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const paso= 20;
    const anchomax = canvas.width;
    const alturamax = canvas.height;


    //Dibujar lineas horizontales
    for(let i = paso; i<alturamax;){
        ctx.beginPath();
        //Acá dibujo lineas
        ctx.moveTo(0, i);
        ctx.lineTo(anchomax,i);
        ctx.strokeStyle ="#338899"; //ver
        ctx.stroke();
        ctx.closePath();
        //i =i+paso
        i += paso;
    }
    console.log("dibujar2")
    //LINEAS VERTICALES
    for(let i = paso; i<anchomax;){
        ctx.beginPath();
        //Acá dibujo lineas
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturamax);
        ctx.stroke();

        //i =i+paso
        i += paso;
    }
    ctx.closePath();
    //EJE X
    ctx.strokeStyle = "#ff071b";
    ctx.beginPath();
    ctx.moveTo(0, alturamax/2);
    ctx.lineTo(anchomax, alturamax/2);
    ctx.stroke();
    ctx.closePath();

    //EJE Y
    ctx.strokeStyle = "#ff081b";
    ctx.beginPath();
    ctx.moveTo(anchomax/2, 0);
    ctx.lineTo(anchomax/2, alturamax);
    ctx.stroke();
    ctx.closePath();

}

//canvas x-y
function dibujarImagen(){
    var canvas =document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX, posY);
    var img= new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;

    img.onload =function(){
        ctx.drawImage(img,posX,posY);
    }
}