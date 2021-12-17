"use strict";
var forma = document.getElementById("forma"),
    salida = document.getElementById("salidaBlusa1"),
    salida2 = document.getElementById("salidaBlusa2"),
    salida3 = document.getElementById("salidaBlusa3"),
    salida4 = document.getElementById("salidaBlusa4"),
    salida5 = document.getElementById("salidaBlusa5"),
    salida6 = document.getElementById("salidaBlusa6");

function modificar(){
  var blusa1 = forma["blusa1"].value;
  var blusa2 = forma["blusa2"].value;
  var blusa3 = forma["blusa3"].value;
  var blusa4 = forma["blusa4"].value;
  var blusa5 = forma["blusa5"].value;
  var blusa6 = forma["blusa6"].value;
  
  salida =  blusa1;
  salida2  =  blusa2;
  salida3 =  blusa3;
  salida4 =  blusa4;
  salida5 =  blusa1;
  salida6  =  blusa1;
}