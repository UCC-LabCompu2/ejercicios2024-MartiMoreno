/**
 * conversion de unidades, de metrods, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies y pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies y pulgadas
 * @return
 */
//mejor funcion
/*function cambiarUnidades(id, valor){
    if(isNaN(valor)){
        alert("Se ingreso unvalor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value  = "";
    }else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701*valor;
        document.lasUnidades.unid_pie.value = 3.28084*valor;
        document.lasUnidades.unid_yarda.value  = 1.09361*valor;
    }else if (id=="pulgada"){
        document.lasUnidades.unid_metro.value = 0.0254*valor;
        document.lasUnidades.unid_pie.value = 0.0833333*valor;
        document.lasUnidades.unid_yarda.value  = 0.0277778*valor;
    }else if(id=="pie"){
        document.lasUnidades.unid_metro.value = 0.3048*valor;
        document.lasUnidades.unid_pulgada.value = 12*valor;
        document.lasUnidades.unid_yarda.value  = 0.333333*valor;
    }else if(id=="yarda"){
        document.lasUnidades.unid_metro.value = 0.9144*valor;
        document.lasUnidades.unid_pulgada.value = 36*valor;
        document.lasUnidades.unid_pie.value  = 3*valor;
    }
}*/
/**
 * Permite convertir grados a radianes y vicevrsa
 * @param {string} id -grados - radianes
 */
function convertirGR (id){
    let grad, rad;
    if (id==="grados"){
        grad = document.getElementById("grados").value;
        rad= (grad*Math.PI)/180;
    }else if (id==="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;

}
function cambiarUnidades (id, valor){
    if(isNaN(valor)) {
        alert("Se ingreso unvalor invalido");
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
    }else if(id==="metro"){
        document.getElementById("pulgada").value = valor*39.3701;
        document.getElementById("pie").value = 3.28084*valor;
        document.getElementById("yarda").value  = 1.09361*valor;
    }else if(id==="pulgada"){
        document.getElementById("metro").value =0.0254*valor;
        document.getElementById("pie").value =0.0833333*valor;
        document.getElementById("yarda").value=0.0277778*valor;
    }else if(id==="pie"){
        document.getElementById("metro").value = 0.3048*valor;
        document.getElementById("pulgada").value = 12*valor;
        document.getElementById("yarda").value  = 0.333333*valor;
    }else if(id=="yarda") {
        document.getElementById("metro").value = 0.9144 * valor;
        document.getElementById("pulgada").value = 36 * valor;
        document.getElementById("pie").value = 3 * valor;
    }
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
    const anchomax = canvas.weight;
    const alturamax = canvas.height;

    ctx.strokeStyle ="#338899";
    ctx.moveTo(0, 20);
    ctx.lineTo(anchomax,20);
    ctx.stroke();
    for(let i = paso; i<alturamax;){
        ctx.beginPath();
        //Acá dibujo lineas
        ctx.moveTo(0, i);
        ctx.lineTo(anchomax,i);
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
        ctx.moveTo(0, i);
        ctx.lineTo(i, alturamax);
        ctx.stroke();
        ctx.closePath();
        //i =i+paso
        i += paso;
    }
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
    const canvas =document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    console.log(posX, posY);
    const img= new Image();
    img.src = "images/auto.png";
    img.onload =function(){
        canvas.drawImage(img,posX,posY);
    }
}