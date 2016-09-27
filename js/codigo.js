//Javascript code

/*var caja = document.querySelector("#caja");
caja.addEventListener("click", cambiarColor);

function cambiarColor(){

  caja.style.background = "red";

}*/

//Same in Jquery
$("#caja").click(function(){

  $("#caja").css({"background":"red", "width":"400px","height":"100px"});

});
