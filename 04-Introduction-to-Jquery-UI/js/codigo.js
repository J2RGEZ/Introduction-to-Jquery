var agregarFecha;
var buscarFecha = null;
var tareas = localStorage.getItem("tarea");

$(".columnas").html(tareas);
//Dragging elements with Jquery UI

$(".columnas").sortable({
  connectWith: ".bloque",
  handle: ".titulo"
})

//Add task form
$("#agregarTarea").click(function() {
  $("header form#agregar").slideToggle("fast");
  $("header form#buscarTarea").slideToggle("fast");
})

//Calendar
$("#fecha1").datepicker({
  changeMonth:true,
  changeYear:true
})

$("#fecha2").datepicker({
  changeMonth:true,
  changeYear:true
})

//Save task
$("#guardar").click(function() {
  if($("#fecha1").val() != ""){
    agregarFecha = $("#fecha1").val();
    $(".columnas").append('<li class="bloque"><div class="titulo">'+$("#tituloTarea").val()+'<span class="eliminar">X</span></div><div class="fecha">'+agregarFecha+'</div><div class="contenido">'+$("#descripcionTarea").val()+'</div></li>');
    localStorage.setItem("tarea",$(".columnas").html());
  }else{
    $("#dialog").dialog();
  }
})

//Delete task
$(".eliminar").click(function() {
  $(this).parent().parent().remove();
  localStorage.setItem("tarea",$(".columnas").html());
})

//Search task
$("#buscar").click(function() {
  if($("#fecha2").val() != ""){
    $(".bloque").hide();
    buscarFecha = $("#fecha2").val();
    var fechas = $(".fecha");
    for(var i = 0; i < fechas.length; i ++){
      if($(fechas[i]).html() == buscarFecha){
        $(fechas[i]).parent().show();
      }
    }
  }else {
    $("#dialog").dialog();
  }
})
